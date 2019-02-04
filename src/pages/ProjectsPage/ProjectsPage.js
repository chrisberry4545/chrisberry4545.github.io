import React from 'react';
import {
  getProjects
} from '../../services';
import { ProjectsTemplate } from '../../templates';

export const ProjectsPage = () => (
  <ProjectsTemplate projects={getProjects()} />
);
