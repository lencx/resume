import React, { FC } from 'react';

import Head, { ResumeHeadProps } from './Head';
import Content from './Content';

interface ResumeProps {
  dataSource: string;
}


const headInfo: ResumeHeadProps = {
  name: '小白',
  sex: '男',
  birthday: '2000.01.01',
  education: '本科',
  major: '计算机专业',
};


const Resume: FC<ResumeProps> = ({}) => {
  return (
    <div>
      <Head {...headInfo} />
      <Content />
    </div>
  )
}

export default Resume;
