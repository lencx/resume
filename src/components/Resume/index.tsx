import React, { FC } from 'react';

import { getVal } from '@/utils/tools';

import Head from './Head';
// import Content from './Content';
import Edu from './Edu';
import Company from './Company';
import Advantage from './Advantage';
import Community from './Community';

import './index.scss';

interface ResumeProps {
  dataSource: any;
}

const Resume: FC<ResumeProps> = ({ dataSource }) => {
  const fn = getVal(dataSource);

  return (
    <div className="resume-card-content">
      <Head dataSource={fn('个人信息')} />
      <div>
        <Advantage dataSource={fn('个人优势')} />
        <Company dataSource={fn('工作经历')} />
        <Community dataSource={fn('社区网站')} />
        <Edu dataSource={fn('教育经历')} />
      </div>
      {/* <Content
        dataSource={{
          edu: fn('教育经历'),
          work: fn('工作经历'),
          advantage: fn('个人优势'),
          community: fn('社区网站'),
        }}
      /> */}
    </div>
  )
}

export default Resume;
