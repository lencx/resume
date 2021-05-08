import React, { FC } from 'react';

import PicInfo from '@comps/PicInfo';
import { getVal } from '@utils/tools';

import companyIcon from './icons/company.svg';

import './index.scss';

export interface ResumeCompanyProps {
  dataSource: any;
}

const ResumeCompany: FC<ResumeCompanyProps> = ({ dataSource }) => {
  return (
    <div className="resume-content-company">
      <h3>工作经历</h3>
      <ul>
        {dataSource.map((item: any, idx: number) => {
          const fn = getVal(item);
          return (
            <li key={idx} className="company-item">
              <PicInfo
                size="sm"
                avatar={companyIcon}
                title={fn('公司名称')}
                desc={fn('公司行业')}
              />
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

ResumeCompany.defaultProps = {
  dataSource: [],
}

export default ResumeCompany;
