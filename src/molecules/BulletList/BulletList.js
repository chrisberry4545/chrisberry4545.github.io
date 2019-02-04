import React from 'react';
import './BulletList.scss';
import {
  TextMedium
} from '../../elements';

export const BulletList = ({ list }) => (
  list && list.length > 0
    ? (
      <ul className='c-bullet-list'>
        {
          list.map((point, index) => (
            <li key={index}>
              <TextMedium>{ point }</TextMedium>
            </li>
          ))
        }
      </ul>
    )
    : null
);
