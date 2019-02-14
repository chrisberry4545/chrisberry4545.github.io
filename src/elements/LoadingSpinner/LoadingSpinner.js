import React from 'react';

import './LoadingSpinner.scss';

export const LoadingSpinner = () => (
  <div className='c-loading-spinner'>
    <div className='c-loading-spinner__dot' />
    <div className='c-loading-spinner__dot' />
    <div className='c-loading-spinner__dot' />
    <div className='c-loading-spinner__dot' />
  </div>
);
