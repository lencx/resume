import React, { FC } from 'react';

import './index.scss';

export interface FormItemProps {
  title: string;
  label: string;
  onChange?: (val: string, label: string) => void;
  placeholder?: string;
}

const FormItem: FC<FormItemProps> = ({ label, title, onChange, placeholder }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value || '', label);
  }

  return (
    <div className="form-item">
      {title && <span>{title}</span>}
      <input
        type="text"
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  )
}

FormItem.defaultProps = {
  label: '',
  placeholder: '',
};

export default FormItem;