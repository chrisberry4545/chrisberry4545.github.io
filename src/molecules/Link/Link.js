import React from 'react';
import './Link.scss';
import {
  TextMedium
} from '../../elements';

export const Link = ({ children, href, rel, target }) => (
  <a href={href} rel={rel} target={target} className='c-link'>
    <TextMedium>{ children }</TextMedium>
  </a>
);
