import { COLORS, FONTS, FRAMES, SCENES, SIZES, TEXTURES } from '../constants';
import { Scene } from 'phaser';

export default class GameOver extends Scene {
  constructor() {
    super({ key: SCENES.GAME_OVER });
  }

  create() {
    const centerX = this.game.config.width / 2;

    this.add
      .text(centerX, 200, 'Teddy got hit =(', {
        color: COLORS.LOSE,
        fontFamily: FONTS.DEFAULT,
        fontSize: SIZES.MEDIUM,
      })
      .setOrigin(0.5);

    this.add.image(centerX, 300, TEXTURES.SHEET, FRAMES.BEAR).setAngle(90);

    this.add
      .text(centerX, 400, 'Try again?', {
        color: COLORS.LOSE,
        fontFamily: FONTS.DEFAULT,
        fontSize: SIZES.MEDIUM,
      })
      .setOrigin(0.5);

    this.input.once('pointerdown', this.tryAgain, this);
  }

  tryAgain() {
    this.scene.start(SCENES.MAIN);
  }
}
