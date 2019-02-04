import React from 'react';
import './SlashSeparatedList.scss';
import {
  TextMedium
} from '../../elements';

export const SlashSeparatedList = ({
  list
}) => (
  list && list.length > 0
    ? (
      <ul className='c-slash-separated-list'>
        {
          list.map((skill) => (
            <li key={skill} className='c-slash-separated-list__item'>
              <TextMedium>{ skill }</TextMedium>
            </li>
          ))
        }
      </ul>
    )
    : null
);
