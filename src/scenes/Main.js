import { Block, Vip } from '../sprites';
import { COLORS, FONTS, FRAMES, SCENES, SIZES, TEXTURES } from '../constants';
import { Math, Scene } from 'phaser';

const NINETY_DEGREES = Math.DegToRad(90);

const cratesLeftTextTemplate = count => `Pillows: ${count}`;

export default class Main extends Scene {
  constructor() {
    super({ key: SCENES.MAIN });
  }

  init() {
    this.Mark = null;
    this.hasBallLaunched = false;
    this.cratesAllowed = 3;
    this.cratesPlaced = 0;
    this.shapes = this.cache.json.get('shapes');
  }

  create() {
    const { world } = this.matter;

    /** @see {@link https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Matter.World.html} */
    world.setBounds(
      0,
      0,
      this.game.config.width,
      this.game.config.height - 90,
      128,
      true,
      true,
      false,
      true
    );

    this.add.image(0, 0, 'sheet', FRAMES.BACKGROUND).setOrigin(0, 0);

    this.Mark = new Vip(world, 200, 750);

    this.cratesLeftText = this.add.text(
      25,
      25,
      cratesLeftTextTemplate(this.cratesAllowed - this.cratesPlaced),
      {
        color: COLORS.DEFAULT,
        fontFamily: FONTS.DEFAULT,
        fontSize: SIZES.LARGE,
      }
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
    const ball = this.matter.add.sprite(
      0,
      0,
      TEXTURES.SHEET,
      FRAMES.SOCCERBALL,
      {
        shape: this.shapes[FRAMES.SOCCERBALL],
      }
    );
    ball.setPosition(
      Math.Between(0, this.game.config.width - ball.width),
      -ball.height
    );
    ball.setScale(0.5);
    ball.setMass(30);
    ball.setVelocity(6, -2);
    ball.setBounce(1);
    ball.setFriction(0, 0, 0);
    ball.setFrictionAir(0.005);
    this.ball = ball;
  }

  update(time, delta) {
    const vipAngle = this.Mark.body.angle;
    if (vipAngle >= NINETY_DEGREES || vipAngle <= -NINETY_DEGREES) {
      this.scene.start(SCENES.GAME_OVER);
      return;
    }

    if (this.ball && this.ball.body) {
      const motion =
        this.ball.body.speed * this.ball.body.speed +
        this.ball.body.angularSpeed * this.ball.body.angularSpeed;

      const isResting = motion < 0.1;

      if (isResting) {
        this.scene.start(SCENES.WIN);
        return;
      }
    }

    if (!this.hasBallLaunched && this.cratesPlaced === this.cratesAllowed) {
      this.hasBallLaunched = true;
      this.launchBall();
    }
  }
}
