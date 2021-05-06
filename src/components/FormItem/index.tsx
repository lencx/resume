import React, { FC } from 'react';

import './index.scss';

export interface FormItemProps {
  label: string;
  title?: string;
  onChange?: (val: string, label: string) => void;
  placeholder?: string;
  value?: string;
}

const FormItem: FC<FormItemProps> = ({ label, title, value, onChange, placeholder }) => {
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
        value={value}
      />
    </div>
  )
}

FormItem.defaultProps = {
  label: '',
  placeholder: '',
};

export default FormItem;