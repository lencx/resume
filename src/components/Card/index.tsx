import React, { FC } from 'react';
import cns from 'classnames';

import './index.scss';

interface CardProps {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ className, title, children }) => {
  return (
    <div className={cns('card', className)}>
      <h3 className="card-title">{title}</h3>
      <div className="card-content">{children}</div>
    </div>
  )
}

export default Card;