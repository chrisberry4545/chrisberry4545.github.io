import React from 'react';
import './App.scss';
import { Header } from '../../molecules';
import { ProjectsPage } from '../../pages';

export const App = () => (
  <div className='c-app'>
    <Header />
    <ProjectsPage />
  </div>
);
