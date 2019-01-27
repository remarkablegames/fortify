import { SCENES } from '../constants';
import createLevel from './createLevel';

export function generateLevelKey(index = 0) {
  return `${SCENES.LEVEL}${index + 1}`;
}

const ALL_LEVELS_CONFIG = [
  {
    cratesAllowed: 3,
  },
  {
    cratesAllowed: 4,
  },
  {
    cratesAllowed: 5,
  },
];

export default ALL_LEVELS_CONFIG.map((levelConfig, index) =>
  createLevel({
    ...levelConfig,
    key: generateLevelKey(index),
    nextLevelKey: generateLevelKey((index + 1) % ALL_LEVELS_CONFIG.length),
  })
);
