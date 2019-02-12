
import posed from 'react-pose';

import {
  DEFAULT_ANIMATION_TIME
} from './animations.const';

export const moveToCenterAnimation = ({
  enterDuration = DEFAULT_ANIMATION_TIME,
  exitDuration = DEFAULT_ANIMATION_TIME
} = {}) => posed.div({
  visible: {
    opacity: () => 1,
    x: ({ poseRef }) => {
      if (poseRef) {
        const { current } = poseRef;
        const boundingRect = current.getBoundingClientRect();
        const translateLeft = (window.innerWidth / 2) -
          (boundingRect.left + boundingRect.width / 2);
        return translateLeft;
      }
      return 0;
    },
    y: ({ poseRef }) => {
      if (poseRef) {
        const { current } = poseRef;
        const boundingRect = current.getBoundingClientRect();
        const distanceFromTop = window.innerHeight / 50;
        return -boundingRect.top + distanceFromTop;
      }
      return 0;
    },
    transition: {
      duration: enterDuration,
      opacity: {
        duration: 0
      }
    }
  },
  hidden: {
    opacity: () => 0,
    x: () => 0,
    y: () => 0,
    transition: {
      duration: exitDuration,
      opacity: {
        duration: 0,
        delay: exitDuration
      }
    }
  },
  props: {
    poseRef: null
  }
});
