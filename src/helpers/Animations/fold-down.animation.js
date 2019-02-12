
import posed from 'react-pose';

import {
  DEFAULT_ANIMATION_TIME
} from '../../helpers';

export const foldDownAnimation = ({
  enterDelay = 0,
  exitDelay = 0,
  enterDuration = DEFAULT_ANIMATION_TIME,
  exitDuration = DEFAULT_ANIMATION_TIME
} = {}) => posed.div({
  open: {
    height: 'auto',
    delay: enterDelay,
    transition: {
      duration: enterDuration
    }
  },
  closed: {
    height: '1px',
    delay: exitDelay,
    transition: {
      duration: exitDuration
    }
  }
});
