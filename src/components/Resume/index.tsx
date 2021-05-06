import React, { FC } from 'react';

import { getVal } from '@/utils';

import Head from './Head';
import Content from './Content';
import data from './me.json';

import './index.scss';

export default () => {
  const fn = getVal(data);

  return (
    <div className="resume-card-content">
      <Head dataSource={fn('个人信息')} />
      <Content />
    </div>
  )
}
