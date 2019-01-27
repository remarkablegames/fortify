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
      require('../assets/game-sprites.png'),
      require('../assets/game-sprites.json')
    );

    // Load body shapes from JSON file generated using PhysicsEditor
    this.load.json('shapes', require('../assets/game-shapes.json'));

    load.image(TEXTURES.PLATFORM, require('../assets/platform.png'));
    load.image(TEXTURES.STAR, require('../assets/star.png'));
  }

  create() {
    this.scene.start(SCENES.MAIN);
  }
}
