import { Block, Vip } from '../sprites';
import {
  COLORS,
  DATA,
  FONTS,
  FRAMES,
  SCENES,
  SIZES,
  TEXTURES,
} from '../constants';
import { Math, Scene } from 'phaser';

const NINETY_DEGREES = Math.DegToRad(90);

const cratesLeftTextTemplate = count => `Pillows: ${count}`;
const levelNumberTextTemplate = number => `Level ${number}`;

export default function createLevel(levelConfig) {
  return class Level extends Scene {
    constructor() {
      super({
        key: levelConfig.key,
      });
    }

    init() {
      this.balls = [];
      this.cratesAllowed = levelConfig.cratesAllowed;
      this.cratesPlaced = 0;
      this.shapes = this.cache.json.get(DATA.SHAPES);
      this.vip = null;
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

      this.add.image(0, 0, TEXTURES.SHEET, FRAMES.BACKGROUND).setOrigin(0, 0);

      this.vip = new Vip(world, 200, 750);

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

      this.add.text(425, 25, levelNumberTextTemplate(levelConfig.number), {
        color: COLORS.DEFAULT,
        fontFamily: FONTS.DEFAULT,
        fontSize: SIZES.LARGE,
      });

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
            bodyA.gameObject.onCollision(bodyB, levelConfig.key);
          }
          if (bodyB && bodyB.gameObject && bodyB.gameObject.onCollision) {
            bodyB.gameObject.onCollision(bodyA, levelConfig.key);
          }
        },
        this
      );
    }

    launchBall() {
      const ballX = Math.Between(0, this.game.config.width - 200);
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
      const vipDeltaX = (this.vip.x - ballX) * (1 / levelConfig.ballSpeed);
      const vipDeltaY = (this.vip.y - ballY) * (1 / levelConfig.ballSpeed);
      ball.setScale(0.5);
      ball.setMass(30);
      ball.setVelocity(vipDeltaX, vipDeltaY);
      ball.setBounce(1);
      ball.setFriction(0, 0, 0);
      ball.setFrictionAir(0.005);
      this.balls = [...this.balls, ball];
    }

    update(time, delta) {
      const vipAngle = this.vip.body.angle;
      if (vipAngle >= NINETY_DEGREES || vipAngle <= -NINETY_DEGREES) {
        this.scene.start(SCENES.GAME_OVER, {
          currentLevelKey: levelConfig.key,
        });
        return;
      }

      const areAllBallsResting =
        this.balls.length === levelConfig.totalBalls &&
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
        this.scene.start(SCENES.WIN, {
          nextLevelKey: levelConfig.nextLevelKey,
        });
      }

      if (
        this.balls.length !== levelConfig.totalBalls &&
        this.cratesPlaced === this.cratesAllowed
      ) {
        this.launchBall();
      }
    }
  };
}
