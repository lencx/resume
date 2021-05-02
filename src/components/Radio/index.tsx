import React, { FC } from 'react';

import './index.scss';

interface RadioProps {
  name: string;
  label: string;
  value: string;
  onChange?: (val: string) => void;
}

const Radio: FC<RadioProps> = ({ name, label, value, onChange }) => {
  const id = label + name;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value);
  }

  return (
    <div className="radio">
      <input type="radio" id={id} name={name} onChange={handleChange} value={value} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

const RadioGroup: FC<any> = ({ name, options, onChange }) => {
  return (
    <div className="radio-group">
      {options.map((itemProps: RadioProps) => (
        <Radio key={itemProps.value} {...itemProps} name={name} onChange={onChange} />
      ))}
    </div>
  )
}

export { Radio, RadioGroup };

export default RadioGroup;
