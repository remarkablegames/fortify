import { COLORS, FONTS, SCENES, SIZES } from '../constants';
import { Scene } from 'phaser';

export default class Win extends Scene {
  constructor() {
    super({ key: SCENES.WIN });
  }

  create() {
    this.add.text(100, 200, 'YOU SAVED TEDDY =)', {
      color: COLORS.WIN,
      fontFamily: FONTS.DEFAULT,
      fontSize: SIZES.MEDIUM,
    });

    this.add.text(100, 400, 'TRY AGAIN?', {
      color: COLORS.WIN,
      fontFamily: FONTS.DEFAULT,
      fontSize: SIZES.MEDIUM,
    });

    this.input.once('pointerdown', this.tryAgain, this);
  }

  tryAgain() {
    this.scene.start(SCENES.MAIN);
  }
}
