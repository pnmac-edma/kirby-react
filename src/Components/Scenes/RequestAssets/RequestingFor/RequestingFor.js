import React from 'react';
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

const RequestingFor = props => {
  const { employees, handleSelectedEmployees } = props;
  const classes = useStyles();
  const theme = useTheme();

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      fontSize: fontSize[0]
    }),

    control: (provided, state) => ({
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

    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: 'none'
    })
  };

  return (
    <React.Fragment>
      <Typography variant="overline" className={classes.menuStyle}>
        Requesting For
      </Typography>
      <Select
        className={('basic-multi-select', classes.table)}
        filterOption={createFilter({ ignoreAccents: false })}
        isMulti
        placeholder={'Select name(s) from the list'}
        styles={customStyles}
        components={{ MenuList: EmployeesList }}
        options={employees}
        onChange={val => handleSelectedEmployees(val)}
      />
    </React.Fragment>
  );
};

export default RequestingFor;
