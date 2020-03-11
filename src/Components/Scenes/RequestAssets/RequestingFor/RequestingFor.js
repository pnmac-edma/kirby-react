import React from 'react';
import Select, { createFilter } from 'react-select';
import { makeStyles } from '@material-ui/core/styles';
import EmployeesList from './EmployeesList';
import { Typography } from '@material-ui/core';
import fontSize from '@edma/design-tokens/js/fontSize';

const useStyles = makeStyles({
  table: {
    width: '100%'
  },
  menuStyle: {
    width: 'max-content',
    textTransform: 'uppercase',
    marginBottom: 8
  }
});

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: fontSize[0]
  }),

  control: (provided, state) => ({
    ...provided,
    border: 0,
    borderBottom: '1px solid black',
    borderRadius: 0,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    fontSize: fontSize[0]
  })
};

const RequestingFor = props => {
  const { employees, handleSelectedEmployees } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography className={classes.menuStyle}>Requesting For</Typography>
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
