import React, { Component } from 'react';
import {
  getProjects
} from '../../services';
import './Projects.scss';
import { ProjectModal } from '../ProjectModal/ProjectModal';

export class Projects extends Component {
  constructor (props) {
    super(props);
    this.state = {
      projectModalDisplayed: null
    };
  }

  showProject (projectName) {
    this.setState({
      projectModalDisplayed: projectName
    });
  }

  render () {
    return (
      <section className='c-projects'>
        {
          getProjects().map((project) => {
            const {
              image,
              name
            } = project;
            return (
              <div className='c-projects__project' key={name}>
                <ProjectModal {
                ...{
                  ...project,
                  onCloseClick: () => this.showProject(null),
                  isVisible: name === this.state.projectModalDisplayed
                }} />
                <div
                  onClick={() => this.showProject(name)}
                  className='c-projects__main-image-wrapper'>
                  <div className='c-projects__main-image'
                    style={{ backgroundImage: `url(${image.src})` }}>
                    <h5 className='c-projects__name'>{ name }</h5>
                  </div>
                </div>
              </div>
            );
          })
        }
      </section>
    );
  }
}
