import React, { FC } from 'react';

import './index.scss';

interface TagProps {
  children: React.ReactNode;
}

const Tag: FC<TagProps> = ({ children }) => {
  return (
    <div className="tag">{children}</div>
  )
}

export default Tag;