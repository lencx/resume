import React, { FC } from 'react';

import './index.scss';

export interface ResumeContentProps {
  dataSource: any
}

const ResumeContent: FC<ResumeContentProps> = () => {
  return (
    <div className="resume-content">
      Conetent
    </div>
  )
}

export default ResumeContent;
