import React, { FC } from 'react';

import { getVal } from '@utils/tools'

import './index.scss';

export interface ResumeWorkProps {
  dataSource: any
}

const Tag = () => {
  return <span></span>
}

const ResumeWork: FC<ResumeWorkProps> = ({ dataSource }) => {
  return (
    <div className="resume-content-work">
      <h3>工作经历</h3>
      <ul>
        {dataSource.map((item: any, idx: number) => {
          const fn = getVal(item);
          return (
            <li key={idx} className="">
              <span>{fn('公司名称')}</span>/
              <span>{fn('公司行业')}</span>/
              <span>{fn('所属部门')}</span>/
              <span>{fn('职位名称')}</span>
              <div>{fn('技能标签')}</div>
              <div>{fn('工作内容')}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

ResumeWork.defaultProps = {
  dataSource: [],
}

export default ResumeWork;
