import React from 'react';
import {
  getProjects
} from '../../services';
import './Projects.scss';

export const Projects = () => (
  <section className='c-projects'>
    {
      getProjects().map(({
        image,
        name
      }) => (
        <div className='c-projects__project' key={name}>
          <div className='c-projects__main-image-wrapper'>
            <div className='c-projects__main-image'
              style={{ backgroundImage: `url(${image.src})` }}>
              <h5 className='c-projects__name'>{ name }</h5>
            </div>
          </div>
        </div>
      ))
    }
  </section>
);
