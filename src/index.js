import './index.css';
import { Boot, GameOver, Intro, Win, allLevels } from './scenes';
import Phaser from 'phaser';
import { addResizeListener } from './helpers/resize';
import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();

/**
 * @see {@link https://photonstorm.github.io/phaser3-docs/global.html#GameConfig}
 */
const config = {
  backgroundColor: '#3b746e',
  width: 600,
  height: 800,
  title: 'Fortify',
  url: process.env.HOMEPAGE,
  version: process.env.VERSION,
  scene: [Boot, GameOver, Intro, Win, ...allLevels],
  physics: {
    default: 'matter',
    matter: {
      debug: process.env.NODE_ENV === 'development',
    },
  },
};

const game = new Phaser.Game(config);
addResizeListener(game);
