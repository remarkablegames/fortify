import { Block, Teddy } from '../sprites';
import {
  COLORS,
  DATA,
  FONTS,
  FRAMES,
  SCENES,
  SIZES,
  TEXTURES,
} from '../constants';
import { Math as PhaserMath, Scene } from 'phaser';
import levels from '../data/levels';

const NINETY_DEGREES = PhaserMath.DegToRad(90);
const TEXT_MARGIN_LEFT = 25;
const TEXT_MARGIN_RIGHT = TEXT_MARGIN_LEFT;
const TEXT_MARGIN_TOP = 25;
const FLOOR_MARGIN_BOTTOM = 90;

const cratesLeftTextTemplate = count => `Pillows: ${count}`;
const levelNumberTextTemplate = number => `Level ${number}`;

export default class Main extends Scene {
  constructor() {
    super({ key: SCENES.MAIN });
  }

  init(level) {
    this.level = level;

    const levelConfig = levels[level];
    // if no more levels, go back to intro screen
    if (!levelConfig) {
      this.scene.start(SCENES.INTRO);
      return;
    }

    this.cratesAllowed = levelConfig.cratesAllowed;
    this.totalBalls = levelConfig.totalBalls;
    this.ballSpeed = levelConfig.ballSpeed;

    this.balls = [];
    this.cratesPlaced = 0;
    this.shapes = this.cache.json.get(DATA.SHAPES);
    this.teddy = null;
  }

  create() {
    const {
      game: {
        config: { width: gameWidth, height: gameHeight },
      },
      matter: { world },
    } = this;

    /** @see {@link https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Matter.World.html#setBounds} */
    world.setBounds(
      0,
      0,
      gameWidth,
      gameHeight - FLOOR_MARGIN_BOTTOM,
      128,
      true,
      true,
      false,
      true
    );

    this.add.image(0, 0, TEXTURES.SHEET, FRAMES.BACKGROUND).setOrigin(0, 0);

    this.teddy = new Teddy(world, 200, 750);

    this.cratesLeftText = this.add.text(
      TEXT_MARGIN_LEFT,
      TEXT_MARGIN_TOP,
      cratesLeftTextTemplate(this.cratesAllowed - this.cratesPlaced),
      {
        color: COLORS.DEFAULT,
        fontFamily: FONTS.DEFAULT,
        fontSize: SIZES.LARGE,
      }
    );

    const levelText = this.add.text(0, 0, levelNumberTextTemplate(this.level), {
      color: COLORS.DEFAULT,
      fontFamily: FONTS.DEFAULT,
      fontSize: SIZES.LARGE,
    });
    levelText.setPosition(
      gameWidth - levelText.width - TEXT_MARGIN_RIGHT,
      TEXT_MARGIN_TOP
    );

    this.input.on(
      'pointerdown',
      pointer => {
        if (this.cratesPlaced < this.cratesAllowed) {
          const block = new Block(world, pointer.x, pointer.y);
          block.init();
          this.cratesPlaced++;
          this.cratesLeftText.text = cratesLeftTextTemplate(
            this.cratesAllowed - this.cratesPlaced
          );
        }
      },
      this
    );

    world.on(
      'collisionstart',
      (event, bodyA, bodyB) => {
        if (bodyA && bodyA.gameObject && bodyA.gameObject.onCollision) {
          bodyA.gameObject.onCollision(bodyB);
        }
        if (bodyB && bodyB.gameObject && bodyB.gameObject.onCollision) {
          bodyB.gameObject.onCollision(bodyA);
        }
      },
      this
    );
  }

  launchBall() {
    const ballX = PhaserMath.Between(0, this.game.config.width - 200);
    const ballY = -200;
    const ball = this.matter.add.sprite(
      ballX,
      ballY,
      TEXTURES.SHEET,
      FRAMES.SOCCERBALL,
      {
        shape: this.shapes[FRAMES.SOCCERBALL],
      }
    );
    const teddyDeltaX = (this.teddy.x - ballX) * (1 / this.ballSpeed);
    const teddyDeltaY = (this.teddy.y - ballY) * (1 / this.ballSpeed);
    ball.setScale(0.5);
    ball.setMass(30);
    ball.setVelocity(teddyDeltaX, teddyDeltaY);
    ball.setBounce(1);
    ball.setFriction(0, 0, 0);
    ball.setFrictionAir(0.005);
    this.balls = [...this.balls, ball];
  }

  update(time, delta) {
    const teddyAngle = this.teddy.body.angle;
    if (teddyAngle >= NINETY_DEGREES || teddyAngle <= -NINETY_DEGREES) {
      this.scene.start(SCENES.GAME_OVER, this.level);
      return;
    }

    const areAllBallsResting =
      this.balls.length === this.totalBalls &&
      this.balls.reduce((areAllBallsResting, ball) => {
        if (!areAllBallsResting) return false;

        if (ball && ball.body) {
          const motion =
            ball.body.speed * ball.body.speed +
            ball.body.angularSpeed * ball.body.angularSpeed;

          const isResting = motion < 0.1;

          if (isResting) {
            return true;
          }
        }

        return false;
      }, true);

    if (areAllBallsResting) {
      this.scene.start(SCENES.WIN, this.level);
    }

    if (
      this.balls.length !== this.totalBalls &&
      this.cratesPlaced === this.cratesAllowed
    ) {
      this.launchBall();
    }
  }
}
