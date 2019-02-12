import React, { Component, createRef } from 'react';
import './Modal.scss';
import {
  CrossIcon
} from './../../elements';
import {
  fadeInOutAnimation,
  moveToCenterAnimation
} from '../../helpers';
import { PoseGroup } from 'react-pose';

const FadeInOutAnimation = fadeInOutAnimation();
const FadeInOutButtonAnimation = fadeInOutAnimation({
  type: 'button'
});
const MoveToCenterAnimation = moveToCenterAnimation();

export class Modal extends Component {
  constructor (props) {
    super(props);
    this.modalRef = createRef();
  }

  render () {
    return (
      <div className='c-modal'>
        <PoseGroup>
          {
            this.props.isVisible &&
              <FadeInOutAnimation key='modal-overlay'
                className='c-modal__overlay'
                onClick={this.props.onCloseClick} />
          }
        </PoseGroup>
        <MoveToCenterAnimation className={`c-modal__inner ${
          this.props.isVisible && 'c-modal__inner--visible'
        }`} ref={this.modalRef} pose={this.props.isVisible ? 'visible' : 'hidden'} poseRef={this.modalRef}>
          { this.props.children }
          <PoseGroup>
            {
              this.props.onCloseClick && this.props.isVisible &&
              <FadeInOutButtonAnimation key='modal-close-btn'
                onClick={this.props.onCloseClick}
                className='c-modal__close-btn'>
                <CrossIcon />
              </FadeInOutButtonAnimation>
            }
          </PoseGroup>
        </MoveToCenterAnimation>
      </div>
    );
  }
}
