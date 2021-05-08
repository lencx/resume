import React, { FC } from 'react';

import Card from '@comps/Card';

import './index.scss';

export interface ResumeAdvantageProps {
  dataSource: any
}

const ResumeAdvantage: FC<ResumeAdvantageProps> = ({ dataSource }) => {
  return (
    <Card title="个人优势" className="resume-content-advantage">
      <p>{dataSource}</p>
    </Card>
  )
}

export default ResumeAdvantage;
