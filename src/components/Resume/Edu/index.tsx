import React, { FC } from 'react';

import Card from '@comps/Card';
import PicInfo from '@comps/PicInfo';
import { getVal } from '@utils/tools';

import schoolIcon from './icons/school.svg';

import './index.scss';

export interface ResumeEduProps {
  dataSource: any
}

const ResumeEdu: FC<ResumeEduProps> = ({ dataSource }) => {
  return dataSource.length > 0 ? (
    <Card title="教育经历" className="resume-content-edu">
      {dataSource.map((item: any, idx: number) => {
        const fn = getVal(item);
        return (
          <div className="edu-item" key={idx}>
            <PicInfo
              avatar={schoolIcon}
              title={fn('学校名称')}
              desc={<>{fn('专业名称')}{fn('学历') && ` / ${fn('学历')}`}</>}
            />
            <div className="time">{fn('在校时间')[0]} ~ {fn('在校时间')[0]}</div>
          </div>
        )
      })}
    </Card>
  ) : null;
}

export default ResumeEdu;
