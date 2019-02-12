import React from 'react';
import './ProjectModal.scss';
import {
  TextHeadingMedium,
  TextMedium
} from '../../elements';
import {
  BulletList,
  Link,
  Modal,
  SlashSeparatedList
} from '../../molecules';
import {
  DEFAULT_ANIMATION_TIME,
  fadeInOutAnimation,
  foldDownAnimation
} from '../../helpers';

const FoldDownAnimation = foldDownAnimation({
  enterDelay: DEFAULT_ANIMATION_TIME,
  enterDuration: DEFAULT_ANIMATION_TIME / 2,
  exitDuration: DEFAULT_ANIMATION_TIME / 2
});

const FadeInOutImgAnimation = fadeInOutAnimation({
  enterDelay: DEFAULT_ANIMATION_TIME,
  type: 'img'
});

export const ProjectModal = ({
  description,
  githubLink,
  icon,
  image,
  isVisible,
  name,
  onCloseClick,
  skills
}) => (
  <Modal onCloseClick={onCloseClick} isVisible={isVisible}>
    <div className='c-project__modal__image-wrapper'>
      <div className='c-project__modal__image'
        style={{ backgroundImage: `url(${image.src})` }} />
      <FadeInOutImgAnimation pose={isVisible ? 'enter' : 'exit'}
        className='c-project-modal__icon' src={icon} alt='icon' />
    </div>

    <FoldDownAnimation className='c-project-modal__details-wrapper'
      pose={isVisible ? 'open' : 'closed'}>
      <div className='c-project-modal__details'>
        <h2 className='c-project-modal__title'>
          <TextHeadingMedium>{ name }</TextHeadingMedium>
        </h2>
        <SlashSeparatedList list={skills} />
        <p className='c-project-modal__description'>
          <TextMedium>{ description.text }</TextMedium>
        </p>
        <BulletList list={description.bulletPoints} />
        <Link href={githubLink} rel='noopener noreferrer' target='_blank'>
          { githubLink }
        </Link>
      </div>
    </FoldDownAnimation>
  </Modal>
);
