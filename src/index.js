import React from 'react';
import { hydrate, render } from 'react-dom';
import './styles/index.scss';
import App from './components/App/App';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
