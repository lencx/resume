import React from 'react';

import Head, { ResumeHeadProps } from './head'

import './index.scss';

const headInfo: ResumeHeadProps = {
  name: 'xxx',
  sex: '男',
  birthday: '2000.01.01',
  education: '本科',
  major: '计算机专业',
};

export default () => {
  return (
    <div className="home">
      <Head {...headInfo} />
    </div>
  )
}