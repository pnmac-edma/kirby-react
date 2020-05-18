import React from 'react';
import { useDispatch } from 'react-redux';
import Select, { createFilter } from 'react-select';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import EmployeesList from './EmployeesList';
import { Typography } from '@material-ui/core';
import { color, font, fontSize } from '@edma/design-tokens';

const useStyles = makeStyles(theme => ({
  table: {
    width: '100%'
  },
  menuStyle: {
    width: 'max-content',
    textTransform: 'uppercase',
    marginBottom: 8,
    fontWeight: 'bold',
    fontFamily: font.body,
    color: theme.palette.type === 'light' ? color.black : color.g300
  }
}));

const RequestingFor = ({
  isMultiple,
  dropDownText,
  data,
  handleChange
}: RequestingForProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const theme = useTheme();

  const customReactSelectStyles = {
    option: (provided: any) => ({
      ...provided,
      fontSize: fontSize[0]
    }),
    control: (provided: any) => ({
      ...provided,
      border: 0,
      borderBottom: `1px solid ${
        theme.palette.type === 'light' ? color.black : color.white
      }`,
      borderRadius: 0,
      backgroundColor: 'transparent',
      boxShadow: 'none',
      fontSize: fontSize[0]
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: 'none'
    }),
    menu: () => ({
      background: theme.palette.type === 'light' ? color.white : color.black
    })
  };

  return (
    <>
      <Typography variant="overline" className={classes.menuStyle}>
        {dropDownText}
      </Typography>
      <Select
        // className={('basic-multi-select', classes.table)} // NOTE: not sure if 'basic-multi-select' is needed
        className={classes.table}
        filterOption={createFilter({ ignoreAccents: false })}
        isMulti={isMultiple}
        placeholder={'Select name(s) from the list'}
        styles={customReactSelectStyles}
        components={{ MenuList: EmployeesList }}
        options={data}
        onChange={val => dispatch(handleChange(val))}
      />
    </>
  );
};

export default RequestingFor;

interface RequestingForProps {
  isMultiple: boolean;
  dropDownText: string;
  data: any;
  handleChange: Function;
}
