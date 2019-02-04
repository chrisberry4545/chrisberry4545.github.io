import React from 'react';
import './Modal.scss';
import posed, { PoseGroup } from 'react-pose';
import {
  CrossIcon
} from './../../elements';

const PosedModal = posed.div({
  enter: { y: '-50%', x: '-50%', opacity: 1 },
  exit: { y: '-10%', x: '-50%', opacity: 0 }
});

const PosedOverlay = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

export const Modal = ({
  children,
  onCloseClick,
  isVisible
}) => (
  <div className='c-modal'>
    <PoseGroup>
      {
        isVisible && [
          <PosedOverlay key='overlay' className='c-modal__overlay'
            onClick={onCloseClick} />,
          <PosedModal key='modal' className='c-modal__inner'>
            { children }
            {
              onCloseClick && <button onClick={onCloseClick}
                className='c-modal__close-btn'>
                <CrossIcon />
              </button>
            }
          </PosedModal>
        ]
      }
    </PoseGroup>
  </div>
);
