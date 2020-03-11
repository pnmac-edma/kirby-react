import React from 'react';
import { Field } from 'formik';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

interface SelectFieldProps {
  className: string;
  id: string;
  label: string;
  name: string;
  options: Array<string>;
}

const SelectField = (props: SelectFieldProps) => {
  const { className, id, label, name, options } = props;

  return (
    <FormControl className={className}>
      <InputLabel id={id}>{label}</InputLabel>
      <Field id={id} name={name} label={label} type="select" as={Select}>
        {options.map((option: string, i: number) => (
          <MenuItem key={`${i}-${option}`} value={option}>
            {option}
          </MenuItem>
        ))}
      </Field>
    </FormControl>
  );
};

export default SelectField;
