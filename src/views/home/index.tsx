import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import RadioGroup from '../../components/Radio';
import FormItem from '../../components/FormItem';

import './index.scss';

const resumeTypeOptions = [
  { label: 'github仓库', value: 'github' },
  { label: 'gitee仓库', value: 'gitee' },
  { label: '链接', value: 'url' },
];

const getName = (val: string) => {
  return (resumeTypeOptions.find((i) => i.value === val) as any).label;
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
      {formData.resumeType && (
        <FormItem
          title={getName(formData.resumeType)}
          label={formData.resumeType}
          placeholder="请输入"
        />
      )}
      {/* TODO: online edit */}
      <button onClick={handlePreview}>预览</button>
    </div>
  )
}