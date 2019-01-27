import { COLORS, FONTS, SCENES, SIZES } from '../constants';
import { Scene } from 'phaser';

export default class GameOver extends Scene {
  constructor() {
    super({ key: SCENES.GAME_OVER });
  }

  create() {
    this.add.text(100, 200, 'TEDDY GOT HIT =(', {
      color: COLORS.LOSE,
      fontFamily: FONTS.DEFAULT,
      fontSize: SIZES.MEDIUM,
    });

    this.add.text(100, 400, 'TRY AGAIN?', {
      color: COLORS.LOSE,
      fontFamily: FONTS.DEFAULT,
      fontSize: SIZES.MEDIUM,
    });

    this.input.once('pointerdown', this.tryAgain, this);
  }

  tryAgain() {
    this.scene.start(SCENES.MAIN);
  }
}
