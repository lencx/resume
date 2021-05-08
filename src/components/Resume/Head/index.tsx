import React, { FC } from 'react';
import cns from 'classnames';

import { getVal, diffTime } from '@/utils/tools';

import maleIcon from './img/male.png';
import femaleIcon from './img/female.png';

import './index.scss';

export interface ResumeHeadProps {
  dataSource: any;
}

const ResumeHead: FC<ResumeHeadProps> = ({ dataSource }) => {
  const fn = getVal(dataSource);
  const isMale = fn('性别') === '男';

  return (
    <div className="resume-head">
      <div className="flex">
        <img className="avatar" src={fn('头像') || (isMale ? maleIcon : femaleIcon)} alt="头像" />
        <div className="info flex">
          <span className="name flex">
            {fn('姓名')}
            <i className={cns({ male: isMale })}>{isMale ? '♂' : '♀'}</i>
          </span>
          <div>
            <span>{fn('公司名称')}</span>/
            <span>{fn('职位名称')}</span>
          </div>
        </div>
      </div>
      <div className="work">
        <span>{diffTime(fn('工作时间'))}年工作经验</span>/
        <span>{fn('最高学历')}</span>/
        <span>{diffTime(fn('出生日期'))}岁</span>
      </div>
      <div>
        <span>{fn('所在城市')}</span>/
        <span>{fn('手机号码')}</span>/
        <span>{fn('联系邮箱')}</span>
      </div>
    </div>
  )
}

export default ResumeHead;
