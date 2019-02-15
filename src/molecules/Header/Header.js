import React from 'react';
import './Header.scss';
import {
  getConfig
} from '../../services';
import {
  AnimatedLogo,
  TextHeadingLarge,
  TextHeadingMedium
} from '../../elements';
import {
  Link
} from '../../molecules';

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
        <h1 className='c-header__full-name'>
          <TextHeadingLarge>{ fullName }</TextHeadingLarge>
        </h1>
        <h2 className='c-header__job-title'>
          <TextHeadingMedium>{ jobTitle }</TextHeadingMedium>
        </h2>
      </div>
      <div>
        <Link href={gitHub} target='_blank'>Github</Link>
        <Link href={`mailto:${email}`}>{ email }</Link>
      </div>
    </header>
  );
};
