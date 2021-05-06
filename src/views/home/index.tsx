import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';

import RadioGroup from '@comps/Radio';
import FormItem from '@comps/FormItem';

import './index.scss';

const resumeTypeOptions = [
  { label: 'github仓库', value: 'github', placeholder: 'username/repo/path/resume.json' },
  { label: 'gitee仓库', value: 'gitee', placeholder: 'username/repo/path/resume.json' },
  { label: '链接', value: 'url', placeholder: 'https://example.com/path/resume.json' },
];

const getVal = (val: string, key: string = 'label') => {
  return (resumeTypeOptions.find((i) => i.value === val) as any)[key];
}

export default () => {
  const [formData, setFormData] = useReducer((o: any, n: any) => ({ ...o, ...n }), {});
  const history = useHistory();

  const handlePreview = () => {
    history.push(`/${btoa((formData as any).link)}`);
  }

  const handleType = (val: string) => {
    setFormData({ resumeType: val });
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
          title={''}
          label={formData.resumeType}
          placeholder={getVal(formData.resumeType, 'placeholder')}
          onChange={handleLink}
        />
      ) : (
        <div className="tip">请选择加载简历数据方式</div>
      )}
      <button disabled={!formData.link} className="preview-btn" onClick={handlePreview}>预览</button>
    </div>
  )
}