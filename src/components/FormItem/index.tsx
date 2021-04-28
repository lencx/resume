import React, { FC } from 'react';

interface FormItemProps {
  label: string;
  onChange?: (val: string) => void;
}

const FormItem: FC<FormItemProps> = ({ label, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value);
  }

  return (
    <div>
      <span>{label}</span>
      <input type="text" onChange={handleChange} />
    </div>
  )
}

FormItem.defaultProps = {
  label: '',
};

export default FormItem;