import { COLORS, FONTS, FRAMES, SCENES, SIZES, TEXTURES } from '../constants';
import { Scene } from 'phaser';

export default class Win extends Scene {
  constructor(args) {
    super({ key: SCENES.WIN });
  }

  init({ nextLevelKey }) {
    this.nextLevelKey = nextLevelKey;
  }

  create() {
    const centerX = this.game.config.width / 2;

    this.add
      .text(centerX, 200, 'You saved teddy =)', {
        color: COLORS.WIN,
        fontFamily: FONTS.DEFAULT,
        fontSize: SIZES.MEDIUM,
      })
      .setOrigin(0.5);

    this.add.image(centerX, 300, TEXTURES.SHEET, FRAMES.BEAR);

    this.add
      .text(centerX, 400, 'Click to continue', {
        color: COLORS.WIN,
        fontFamily: FONTS.DEFAULT,
        fontSize: SIZES.MEDIUM,
      })
      .setOrigin(0.5);

    this.input.once('pointerdown', this.tryAgain, this);
  }

  tryAgain() {
    this.scene.start(this.nextLevelKey);
  }
}
