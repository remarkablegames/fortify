import { SCENES } from '../constants';
import createLevel from './createLevel';

export function generateLevelKey(index = 0) {
  return `${SCENES.LEVEL}${index + 1}`;
}

const ALL_LEVELS_CONFIG = [
  {
    cratesAllowed: 3,
    totalBalls: 1,
    ballSpeed: 40,
  },
  {
    cratesAllowed: 4,
    totalBalls: 2,
    ballSpeed: 50,
  },
  {
    cratesAllowed: 5,
    totalBalls: 3,
    ballSpeed: 70,
  },
];

export default ALL_LEVELS_CONFIG.map((levelConfig, index) =>
  createLevel({
    ...levelConfig,
    key: generateLevelKey(index),
    number: index + 1,
    nextLevelKey: generateLevelKey((index + 1) % ALL_LEVELS_CONFIG.length),
  })
);
