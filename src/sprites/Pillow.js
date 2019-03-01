import { DATA, FRAMES, TEXTURES } from '../constants';
import { Physics } from 'phaser';

export default class Pillow extends Physics.Matter.Sprite {
  constructor(world, x, y, texture, frame, options) {
    super(world, x, y, TEXTURES.SHEET, FRAMES.PILLOW, {
      shape: world.scene.cache.json.get(DATA.SHAPES)[FRAMES.PILLOW],
    });
    world.scene.add.existing(this);
  }

  init() {
    this.setVelocity(0);
    this.setBounce(0);
    this.setFriction(1);
    this.setFrictionAir(0);
    this.setMass(300);
  }
}
