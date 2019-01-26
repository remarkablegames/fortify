import { SCENES } from '../constants';
import { Scene } from 'phaser';

export default class GameOver extends Scene {
  constructor() {
    super({ key: SCENES.GAME_OVER });
    this.tryAgain = this.tryAgain.bind(this);
  }

  create() {
    this.add.text(100, 200, 'DAN SUCKS', {
      color: '#00ff00',
      fontFamily: 'Arial',
      fontSize: 64,
    });

    this.add.text(100, 400, 'TRY AGAIN?', {
      color: '#00ff00',
      fontFamily: 'Arial',
      fontSize: 64,
    });

    this.input.once('pointerdown', this.tryAgain);
  }

  tryAgain() {
    this.scene.start(SCENES.MAIN);
  }
}
