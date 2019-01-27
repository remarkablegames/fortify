import { FRAMES, SCENES, TEXTURES } from '../constants';
import { Scene } from 'phaser';

export default class Intro extends Scene {
  constructor() {
    super({ key: SCENES.INTRO });
  }

  create() {
    const centerX = this.game.config.width / 2;

    this.add.image(centerX, 291, TEXTURES.SHEET, FRAMES.BEAR);
    this.add.image(centerX, 401, TEXTURES.SHEET, FRAMES.TITLE);
    this.add.image(centerX, 521, TEXTURES.SHEET, FRAMES.START_BUTTON);

    this.input.once('pointerdown', this.tryAgain, this);
  }

  tryAgain() {
    this.scene.start(SCENES.MAIN);
  }
}
