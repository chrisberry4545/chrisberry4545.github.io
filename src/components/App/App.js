import React from 'react';
import './App.scss';
import { Header } from '../Header/Header';
import { Projects } from '../Projects/Projects';

const App = () => (
  <div className="c-app">
    <Header />
    <Projects />
  </div>
);

export default App;
