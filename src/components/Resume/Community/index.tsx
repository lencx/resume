import React, { FC } from 'react';

import './index.scss';

export interface ResumeCommunityProps {
  dataSource: any
}

const ResumeCommunity: FC<ResumeCommunityProps> = () => {
  return (
    <div className="resume-content-community">
      <h3>社区网站</h3>
    </div>
  )
}

export default ResumeCommunity;
