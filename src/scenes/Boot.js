import { SCENES, TEXTURES } from '../constants';
import { Scene } from 'phaser';

export default class Boot extends Scene {
  constructor() {
    super({ key: SCENES.BOOT });
  }

  preload() {
    const { load } = this;

    // Load sprite sheet generated with TexturePacker
    this.load.atlas(
      'sheet',
      require('../assets/fruit-sprites.png'),
      require('../assets/fruit-sprites.json')
    );

    // Load body shapes from JSON file generated using PhysicsEditor
    this.load.json('shapes', require('../assets/fruit-shapes.json'));

    load.image(TEXTURES.LIVING_ROOM, require('../assets/living-room.png'));
    load.image(TEXTURES.BEAR, require('../assets/bear.png'));
    load.image(TEXTURES.PLATFORM, require('../assets/platform.png'));
    load.image(TEXTURES.STAR, require('../assets/star.png'));
  }

  create() {
    this.scene.start(SCENES.MAIN);
  }
}
