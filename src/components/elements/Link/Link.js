import React from 'react';
import './Link.scss';

export const Link = ({ children, href, rel, target }) => (
  <a href={href} rel={rel} target={target} className='c-link'>
    { children }
  </a>
);
