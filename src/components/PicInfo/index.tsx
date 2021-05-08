import React, { FC } from 'react';

import './index.scss';

interface PicInfoProps {
  avatar: string;
  title: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  desc?: React.ReactNode;
}

const PicInfo: FC<PicInfoProps> = ({ avatar, size, title, desc }) => {
  return (
    <div className="picinfo">
      <img className={`avatar ${size}`} src={avatar} />
      <div className="info">
        <span className="title">{title}</span>
        <span className="desc">{desc}</span>
      </div>
    </div>
  )
}

PicInfo.defaultProps = {
  size: 'lg',
};

export default PicInfo;
