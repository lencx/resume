import React, { FC, useReducer } from 'react';

import FormItem, { FormItemProps } from '../FormItem';

interface FormListProps {
  dataSource: FormItemProps[];
  onChange?: (formData: any) => void;
}

const FormList: FC<FormListProps> = ({ dataSource, onChange }) => {
  const [formData, setFormData] = useReducer((o: any, n: any) => ({ ...o, ...n }), {});

  const handleChange = (val: string, label: string) => {
    setFormData({ [label]: val });
    onChange && onChange({ ...formData, [label]: val });
  }

  return (
    <div>
      {dataSource.map((itemProps: FormItemProps) => (
        <FormItem
          {...itemProps}
          key={itemProps.label}
          onChange={handleChange}
        />
      ))}
    </div>
  )
}

FormList.defaultProps = {
  dataSource: [],
};

export default FormList;
