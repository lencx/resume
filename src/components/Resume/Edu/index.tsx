import React, { FC } from 'react';

import './index.scss';

export interface ResumeEduProps {
  dataSource: any
}

const ResumeEdu: FC<ResumeEduProps> = () => {
  return (
    <div className="resume-content-edu">
      <h3>教育经历</h3>
    </div>
  )
}

export default ResumeEdu;
