import React, { Component } from 'react';
import './ProjectsTemplate.scss';
import { ProjectModal } from '../../organisms';
import {
  BackgroundImageWithLoadingSpinner
} from '../../molecules';
import {
  TextHeadingLarge
} from '../../elements';
import {
  DEFAULT_ANIMATION_TIME,
  fadeInAnimation
} from '../../helpers';
import { PoseGroup } from 'react-pose';

const FadeInAnimation = fadeInAnimation({
  enterDuration: 0,
  enterDelay: DEFAULT_ANIMATION_TIME
});

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
            const isVisible = name === this.state.projectModalDisplayed;
            return (
              <div className='c-projects-template__project' key={name}>
                <div className='c-projects-template__main-image-wrapper'>
                  <div
                    className='c-projects-template__main-image-wrapper__inner'>
                    <ProjectModal {
                    ...{
                      ...project,
                      onCloseClick: () => this.showProject(null),
                      isVisible
                    }} />
                    <PoseGroup>
                      {
                        !isVisible &&
                        <FadeInAnimation key='projects-template-fade-in'
                          className='c-projects-template__main-image'
                          onClick={() => this.showProject(name)}>
                          <BackgroundImageWithLoadingSpinner src={image.src}>
                            <h5 className='c-projects-template__name'>
                              <TextHeadingLarge>{ name }</TextHeadingLarge>
                            </h5>
                          </BackgroundImageWithLoadingSpinner>
                        </FadeInAnimation>
                      }
                    </PoseGroup>
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
