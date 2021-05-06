import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';

import RadioGroup from '@comps/Radio';
import FormItem from '@comps/FormItem';
import { resumeTypeOptions } from '@utils/constant';
import { getResumeType } from '@utils/tools';

import './index.scss';

export default () => {
  const [formData, setFormData] = useReducer((o: any, n: any) => ({ ...o, ...n }), {});
  const history = useHistory();

  const handlePreview = () => {
    history.push(`/${btoa(formData.resumeType + '|' + (formData as any).link)}`);
  }

  const handleType = (val: string) => {
    if (val !== formData.resumeType) {
      setFormData({ resumeType: val, link: '' });
    }
    setFormData({ resumeType: val, link: '' });
  }

  const handleLink = (val: string) => {
    setFormData({ link: val });
  }

  return (
    <div className="home-page">
      <RadioGroup
        name="resumeType"
        options={resumeTypeOptions}
        onChange={handleType}
      />
      {formData.resumeType ? (
        <FormItem
          label={formData.resumeType}
          placeholder={getResumeType(formData.resumeType, 'placeholder')}
          onChange={handleLink}
          value={formData.link}
        />
      ) : (
        <div className="tip">请选择加载简历数据方式</div>
      )}
      <button disabled={!formData.link} className="preview-btn" onClick={handlePreview}>预览</button>
    </div>
  )
}