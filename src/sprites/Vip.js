import { SCENES, TEXTURES } from '../constants';
import { Physics } from 'phaser';

export default class Vip extends Physics.Matter.Sprite {
  constructor(world, x, y, texture, frame) {
    super(world, x, y, TEXTURES.BEAR);
    world.scene.add.existing(this);
  }

  onCollision(body) {
    if (body.gameObject !== null) {
      this.world.scene.scene.start(SCENES.GAME_OVER);
    }
  }
}
