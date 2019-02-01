import React from 'react';
import './ProjectModal.scss';
import posed, { PoseGroup } from 'react-pose';
import {
  CrossIcon,
  Link
} from '../elements';

const Modal = posed.div({
  enter: { y: '-50%', x: '-50%', opacity: 1 },
  exit: { y: '-10%', x: '-50%', opacity: 0 }
});

const Overlay = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
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
  <div className='c-project-modal'>
    <PoseGroup>
      {
        isVisible && [
          <Overlay key='overlay' className='c-project-modal__overlay'
            onClick={onCloseClick} />,
          <Modal key='modal' className='c-project-modal__inner'>
            <div className='c-project__modal__image-wrapper'>
              <img className='c-project__modal__image'
                src={image.src} alt={image.alt} />
              <img className='c-project-modal__icon' src={icon} alt='icon' />
            </div>
            <button onClick={onCloseClick}
              className='c-project-modal__close-btn'>
              <CrossIcon />
            </button>
            <div className='c-project-modal__details'>
              <h2 className='c-project-modal__title'>{ name }</h2>
              <ul className='c-project-modal__skills'>
                {
                  skills.map((skill) => (
                    <li key={skill} className='c-project-modal__skills__item'>
                      { skill }
                    </li>
                  ))
                }
              </ul>
              <p className='c-project-modal__description'>{ description.text }</p>
              {
                description.bulletPoints && (
                  <ul className='c-project-modal__description-bullets'>
                    { description.bulletPoints.map((point, index) => (
                      <li key={index}>{ point }</li>
                    )) }
                  </ul>
                )
              }
              <Link href={githubLink}
                rel='noopener noreferrer' target='_blank'>
                { githubLink }
              </Link>
            </div>
          </Modal>
        ]
      }
    </PoseGroup>
  </div>
);
