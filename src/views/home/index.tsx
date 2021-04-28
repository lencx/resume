import React from 'react';
import { useHistory } from 'react-router-dom';

import FormItem from '../../components/FormItem';

import './index.scss';

export default () => {
  const history = useHistory();

  const handlePreview = () => {
    // TODO: base64 params
    history.push('/xxx');
  }

  return (
    <div className="home-page">
      <FormItem label="Repo" />
      <FormItem label="URL" />
      <FormItem label="Theme" />
      {/* TODO: online edit */}
      <button onClick={handlePreview}>预览</button>
    </div>
  )
}