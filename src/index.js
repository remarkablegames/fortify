import './index.css';
import { Boot, GameOver, Main } from './scenes';
import Phaser from 'phaser';
import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();

/**
 * @see {@link https://photonstorm.github.io/phaser3-docs/global.html#GameConfig}
 */
const config = {
  width: 600,
  height: 800,
  title: 'Fortify',
  // the following two values are exposed from `package.json`
  url: process.env.HOMEPAGE,
  version: process.env.VERSION,
  scene: [Boot, GameOver, Main],
  physics: {
    default: 'matter',
    matter: {
      debug: process.env.NODE_ENV === 'development',
    },
  },
};

new Phaser.Game(config);
