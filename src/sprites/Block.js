import { Physics } from 'phaser';
import { FRAMES, TEXTURES } from '../constants';

export default class Block extends Physics.Matter.Sprite {
  constructor(world, x, y, texture, frame) {
    super(world, x, y, TEXTURES.SHEET, FRAMES.CRATE);

    const shapes = world.scene.cache.json.get('shapes');

    world.scene.add.existing(this);
  }
}
