import React, { FC } from 'react';

import './index.scss';

export interface ResumeAdvantageProps {
  dataSource: any
}

const ResumeAdvantage: FC<ResumeAdvantageProps> = ({ dataSource }) => {
  return (
    <div className="resume-content-advantage">
      <h3>个人优势</h3>
      <p>{dataSource}</p>
    </div>
  )
}

export default ResumeAdvantage;
