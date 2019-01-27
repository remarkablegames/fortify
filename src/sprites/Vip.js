import { FRAMES, SCENES, TEXTURES } from '../constants';
import { Physics } from 'phaser';

export default class Vip extends Physics.Matter.Sprite {
  constructor(world, x, y, texture, frame,  options) {
    super(world, x, y, TEXTURES.SHEET, FRAMES.BEAR, {
      shape: world.scene.cache.json.get('shapes')[FRAMES.BEAR],
    });
    this.setScale(0.5);
    world.scene.add.existing(this);
  }

  onCollision(body) {
    if (body.gameObject !== null) {
      this.world.scene.scene.start(SCENES.GAME_OVER);
    }
  }
}
