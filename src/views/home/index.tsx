import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import RadioGroup from '@comps/Radio';
import FormItem from '@comps/FormItem';

import './index.scss';

const resumeTypeOptions = [
  { label: 'github仓库', value: 'github', placeholder: '<username>/<repo>/my_resume.yml' },
  { label: 'gitee仓库', value: 'gitee', placeholder: '<username>/<repo>/my_resume.yml' },
  { label: '链接', value: 'url', placeholder: 'https://example.com/my_resume.yml' },
];

const getVal = (val: string, key: string = 'label') => {
  return (resumeTypeOptions.find((i) => i.value === val) as any)[key];
}

export default () => {
  const [formData, setFormData] = useState<any>({});
  const history = useHistory();

  const handlePreview = () => {
    const data: any = formData;
    // const _repo = data.repo;
    // const _theme = data.theme;

    // TODO: base64 params
    history.push('/xxx');
  }

  const handleType = (val: string) => {
    setFormData({ resumeType: val });
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
          // title={getVal(formData.resumeType)}
          title={''}
          label={formData.resumeType}
          placeholder={getVal(formData.resumeType, 'placeholder')}
        />
      ) : (
        <div className="tip">请选择加载简历数据方式</div>
      )}
      {/* TODO: online edit */}
      <button className="preview-btn" onClick={handlePreview}>预览</button>
    </div>
  )
}