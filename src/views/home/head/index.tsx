import React, { FC } from 'react';

import './index.scss';

export interface ResumeHeadProps {
  name: string;
  sex: '男' | '女';
  birthday: string;
  education: string;
  major: string;
  avatar?: string;
}

const ResumeHead: FC<ResumeHeadProps> = (props) => {
  const { name, sex, birthday, education, major } = props;

  return (
    <div className="resume-head">
      <h2>{name}</h2>
      <div className="">
        <span>{sex}</span>
        {' / '}
        <span>{birthday}</span>
      </div>
      <div>
        <span>{education}</span>
        {' / '}
        <span>{major}</span>
      </div>
    </div>
  )
}

export default ResumeHead;
