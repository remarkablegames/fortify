import { Player, Block } from '../sprites';
import { FRAMES, SCENES, SHEET, TEXTURES } from '../constants';
import { Scene } from 'phaser';
import { Score } from '../texts';

const DEGREES = {
  '90': Math.PI / 2,
};

export default class Main extends Scene {
  constructor() {
    super({ key: SCENES.MAIN });
    this.Mark = null;
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

    // this.matter.add.sprite(200, 50, TEXTURES.SHEET, FRAMES.CRATE, { shape: shapes[FRAMES.CRATE] });
    // this.matter.add.sprite(250, 250, TEXTURES.SHEET, FRAMES.BANANA, {
    //  shape: shapes[FRAMES.BANANA],
    // });
    // this.matter.add.sprite(360, 50, TEXTURES.SHEET, FRAMES.ORANGE, {
    //  shape: shapes[FRAMES.ORANGE],
    // });
    // this.matter.add.sprite(400, 250, TEXTURES.SHEET, FRAMES.CHERRIES, {
    //  shape: shapes[FRAMES.CHERRIES],
    // });

    this.Mark = this.matter.add.sprite(200, 200, TEXTURES.BEAR, { isStatic: true })

    this.input.on(
      'pointerdown',
      pointer => {
        new Block(this.matter.world, pointer.x, pointer.y, TEXTURES.CRATE, 'sheet');
      }, this
    );
    
    this.time.addEvent({
      delay: 1000,
      callback: this.launchBall,
      callbackScope: this,
    });
  }

  launchBall() {
    const ball = this.matter.add.sprite(0, 0, TEXTURES.SHEET, FRAMES.ORANGE, {
     shape: this.shapes.orange,
    });
    ball.setMass(30);
    ball.setVelocity(4, -2);
    ball.setBounce(1);
    ball.setFriction(0, 0, 0);
    ball.setFrictionAir(0.005);
  }
  
  update() {
    if (
      this.Mark.body.angle >= DEGREES['90'] ||
      this.Mark.body.angle <= -(DEGREES['90'])
    ) {
      this.scene.start(SCENES.GAME_OVER);
    }
  }
}
