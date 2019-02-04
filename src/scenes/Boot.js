import { DATA, SCENES, TEXTURES } from '../constants';
import { Scene } from 'phaser';

export default class Boot extends Scene {
  constructor() {
    super({ key: SCENES.BOOT });
  }

  preload() {
    const { load } = this;

    // Load sprite sheet generated with TexturePacker
    load.atlas(
      TEXTURES.SHEET,
      require('../assets/game-sprites.png'),
      require('../assets/game-sprites')
    );

    // Load body shapes from JSON file generated using PhysicsEditor
    load.json(DATA.SHAPES, require('../assets/game-shapes'));
  }

  create() {
    this.scene.start(SCENES.INTRO);
  }
}
