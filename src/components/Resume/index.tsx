import React, { FC } from 'react';

import { getVal } from '@/utils';

import Head from './Head';
import Content from './Content';

import './index.scss';

interface ResumeProps {
  dataSource: any;
}

const Resume: FC<ResumeProps> = ({ dataSource }) => {
  const fn = getVal(dataSource);

  return (
    <div className="resume-card-content">
      <Head dataSource={fn('个人信息')} />
      <Content />
    </div>
  )
}

export default Resume;
