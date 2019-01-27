import { SCENES } from '../constants';
import createLevel from './createLevel';

export function generateLevelKey(index = 0) {
  return `${SCENES.LEVEL}${index + 1}`;
}

const ALL_LEVELS_CONFIG = [
  {
    cratesAllowed: 3,
  },
];

export default ALL_LEVELS_CONFIG.map((levelConfig, index) =>
  createLevel({
    ...levelConfig,
    key: generateLevelKey(index),
  })
);
