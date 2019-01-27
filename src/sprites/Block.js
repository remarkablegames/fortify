import { Physics } from 'phaser';
import { FRAMES, TEXTURES } from '../constants';

export default class Block extends Physics.Matter.Sprite {
  constructor(world, x, y, texture, frame, options) {
    super(world, x, y, TEXTURES.SHEET, FRAMES.CRATE, {
      shape: world.scene.cache.json.get('shapes')[FRAMES.CRATE],
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
