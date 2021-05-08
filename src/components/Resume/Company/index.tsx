import React, { FC } from 'react';

import Tag from '@comps/Tag';
import Card from '@comps/Card';
import PicInfo from '@comps/PicInfo';
import { getVal, extractLink } from '@utils/tools';

import companyIcon from './icons/company.svg';

import './index.scss';

export interface ResumeCompanyProps {
  dataSource: any;
}

const ResumeCompany: FC<ResumeCompanyProps> = ({ dataSource }) => {
  return (
    <div className="resume-content-company">
      <Card title="工作经历">
        <ul>
          {dataSource.map((item: any, idx: number) => {
            const fn = getVal(item);
            const descList = [fn('公司行业'), fn('所属部门'), fn('职位名称')].filter(i => !!i);

            return (
              <li key={idx} className="company-item">
                <PicInfo
                  size="lg"
                  avatar={companyIcon}
                  title={fn('公司名称')}
                  desc={descList.join(' / ')}
                />
                <div className="tag-list">
                  {fn('技能标签').map((i: string) => (
                    <Tag key={i}>{i}</Tag>
                  ))}
                </div>
                <ul className="work-list">
                  {fn('工作内容').map((i: string) => {
                    return <li key={i} dangerouslySetInnerHTML={{ __html: extractLink(i) }} />;
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </Card>
    </div>
  )
}

ResumeCompany.defaultProps = {
  dataSource: [],
}

export default ResumeCompany;
