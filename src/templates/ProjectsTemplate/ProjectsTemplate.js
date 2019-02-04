import React, { Component } from 'react';
import './ProjectsTemplate.scss';
import { ProjectModal } from '../../organisms';
import {
  TextHeadingLarge
} from '../../elements';

export class ProjectsTemplate extends Component {
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
      <section className='c-projects-template'>
        {
          this.props.projects.map((project) => {
            const {
              image,
              name
            } = project;
            return (
              <div className='c-projects-template__project' key={name}>
                <ProjectModal {
                ...{
                  ...project,
                  onCloseClick: () => this.showProject(null),
                  isVisible: name === this.state.projectModalDisplayed
                }} />
                <div onClick={() => this.showProject(name)}
                  className='c-projects-template__main-image-wrapper'>
                  <div className='c-projects-template__main-image'
                    style={{ backgroundImage: `url(${image.src})` }}>
                    <h5 className='c-projects-template__name'>
                      <TextHeadingLarge>{ name }</TextHeadingLarge>
                    </h5>
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
