import React from 'react';
import './Header.scss';
import {
  getConfig
} from '../../services';
import {
  AnimatedLogo
} from '../AnimatedLogo/AnimatedLogo';
import {
  Link
} from '../elements';

export const Header = () => {
  const {
    email,
    fullName,
    gitHub,
    jobTitle
  } = getConfig();
  return (
    <header className='c-header'>
      <div>
        <div className='c-header__animated-logo-wrapper'>
          <AnimatedLogo color='#DDDDDD' />
        </div>
        <h1 className='c-header__full-name'>{ fullName }</h1>
        <h2 className='c-header__job-title'>{ jobTitle }</h2>
      </div>
      <div>
        <Link href={gitHub} target='_blank'>Github</Link>
        <Link href={`mailto:${email}`}>{ email }</Link>
      </div>
    </header>
  );
};
