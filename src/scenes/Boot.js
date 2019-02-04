import { DATA, SCENES, TEXTURES } from '../constants';
import { Scene } from 'phaser';

export default class Boot extends Scene {
  constructor() {
    super({ key: SCENES.BOOT });
  }

  init() {
    this.resize();
    window.addEventListener('resize', this.resize);
  }

  destroy() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const { canvas } = this.game;
    const width =
      window.innerWidth > 0 ? window.innerWidth : window.screen.width;
    const height =
      window.innerHeight > 0 ? window.innerHeight : window.screen.height;
    const wratio = width / height;
    const ratio = canvas.width / canvas.height;

    if (wratio < ratio) {
      canvas.style.width = width + 'px';
      canvas.style.height = width / ratio + 'px';
    } else {
      canvas.style.width = height * ratio + 'px';
      canvas.style.height = height + 'px';
    }
  };

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
