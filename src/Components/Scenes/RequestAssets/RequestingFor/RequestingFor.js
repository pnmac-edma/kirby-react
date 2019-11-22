import React from 'react';
import Select, { createFilter } from 'react-select';
import { makeStyles } from '@material-ui/core/styles';
import MenuList from './MenuList';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    width: 400
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
    fontSize: 12
  }),

  control: (provided, state) => ({
    ...provided,
    border: 0,
    borderBottom: '1px solid black',
    borderRadius: 0,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    fontSize: 14
  })
};

const RequestingFor = props => {
  const { requestedFor, requestSelectValues } = props;
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
        components={{ MenuList }}
        options={requestedFor}
        onChange={val => requestSelectValues(val)}
      />
    </React.Fragment>
  );
};

export default RequestingFor;
