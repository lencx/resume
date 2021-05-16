import React, { FC } from 'react';
import cns from 'classnames';

import './index.scss';

interface PicInfoProps {
  avatar: string;
  title: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  desc?: React.ReactNode;
  border?: boolean;
}

const PicInfo: FC<PicInfoProps> = ({ avatar, size, title, desc, border }) => {
  return (
    <div className="picinfo">
      <img className={cns('avatar', size, { border })} src={avatar} />
      <div className="info">
        <span className="title">{title}</span>
        <span className="desc">{desc}</span>
      </div>
    </div>
  )
}

PicInfo.defaultProps = {
  size: 'lg',
  border: true,
};

export default PicInfo;
