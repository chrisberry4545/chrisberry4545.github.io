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
      <img className='c-project__modal__image'
        src={image.src} alt={image.alt} />
      <img className='c-project-modal__icon' src={icon} alt='icon' />
    </div>
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
  </Modal>
);
