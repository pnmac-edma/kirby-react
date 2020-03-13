import React from 'react';
import { Field } from 'formik';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

interface SelectFieldProps {
  className: string;
  id: string;
  label?: string | null;
  name: string;
  options: Array<string>;
  fullWidth?: boolean;
  placeholder?: string | null;
  variant?: string | null;
}

const SelectField = ({
  className,
  fullWidth = false,
  id,
  label = null,
  name,
  options,
  placeholder,
  variant
}: SelectFieldProps) => {
  return (
    <FormControl fullWidth={fullWidth} className={className}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Field
        id={id}
        name={name}
        label={label}
        type="select"
        as={Select}
        variant={variant}
        placeholder={placeholder}
      >
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
