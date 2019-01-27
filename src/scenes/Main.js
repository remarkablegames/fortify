import { Block, Vip } from '../sprites';
import { FRAMES, SCENES, TEXTURES } from '../constants';
import { Scene } from 'phaser';

const DEGREES = {
  '90': Math.PI / 2,
};

const cratesLeftTextTemplate = count => `Crates: ${count}`;

export default class Main extends Scene {
  constructor() {
    super({ key: SCENES.MAIN });
  }

  init() {
    this.Mark = null;
    this.hasBallLaunched = false;
    this.cratesAllowed = 3;
    this.cratesPlaced = 0;
  }

  create() {
    const shapes = this.cache.json.get('shapes');
    this.shapes = shapes;

    this.matter.world.setBounds(
      0,
      0,
      this.game.config.width,
      this.game.config.height
    );
    this.add.image(0, 0, TEXTURES.LIVING_ROOM).setOrigin(0, 0);

    this.Mark = new Vip(this.matter.world, 200, 750);

    this.cratesLeftText = this.add.text(
      20,
      20,
      cratesLeftTextTemplate(this.cratesAllowed - this.cratesPlaced),
      {
        fontSize: 64,
        fontFamily: 'Arial',
        fill: '#ffffff',
      }
    );

    this.input.on(
      'pointerdown',
      pointer => {
        if (this.cratesPlaced < this.cratesAllowed) {
          const block = new Block(this.matter.world, pointer.x, pointer.y);
          block.init();
          this.cratesPlaced++;
          this.cratesLeftText.text = cratesLeftTextTemplate(
            this.cratesAllowed - this.cratesPlaced
          );
        }
      },
      this
    );
    this.matter.world.on('collisionstart', function(event, bodyA, bodyB) {
      if (bodyA && bodyA.gameObject && bodyA.gameObject.onCollision) {
        bodyA.gameObject.onCollision(bodyB);
      }
      if (bodyB && bodyB.gameObject && bodyB.gameObject.onCollision) {
        bodyB.gameObject.onCollision(bodyA);
      }
    });
  }

  launchBall() {
    this.ball = this.matter.add.sprite(0, 0, TEXTURES.SHEET, FRAMES.ORANGE, {
      shape: this.shapes[FRAMES.ORANGE],
    });
    this.ball.setMass(30);
    this.ball.setVelocity(4, -2);
    this.ball.setBounce(1);
    this.ball.setFriction(0, 0, 0);
    this.ball.setFrictionAir(0.005);
  }

  update(time, delta) {
    if (
      this.Mark.body.angle >= DEGREES['90'] ||
      this.Mark.body.angle <= -DEGREES['90']
    ) {
      this.scene.start(SCENES.GAME_OVER);
    }

    if (this.ball && this.ball.body) {
      const motion =
        this.ball.body.speed * this.ball.body.speed +
        this.ball.body.angularSpeed * this.ball.body.angularSpeed;

      const isResting = motion < 0.1;

      if (isResting) {
        this.add.text(100, 400, 'DAN RULES. TRY AGAIN?', {
          color: '#00ff00',
          fontFamily: 'Arial',
          fontSize: 48,
        });

        this.input.once('pointerdown', () => this.scene.start(SCENES.MAIN));
      }
    }

    if (!this.hasBallLaunched && this.cratesPlaced === this.cratesAllowed) {
      this.hasBallLaunched = true;
      this.launchBall();
    }
  }
}
