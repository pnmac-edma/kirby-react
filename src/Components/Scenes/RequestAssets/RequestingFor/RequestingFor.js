import React from 'react';
import Select, { createFilter } from 'react-select';
import { makeStyles } from '@material-ui/core/styles';
import MenuList from './MenuList';

const useStyles = makeStyles({
  table: {
    width: 400
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
    fontSize: 12
  })
};

const RequestingFor = props => {
  const { requestedFor, requestSelectValues } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Select
        className={('basic-multi-select', classes.table)}
        filterOption={createFilter({ ignoreAccents: false })}
        isMulti
        styles={customStyles}
        components={{ MenuList }}
        options={requestedFor}
        onChange={val => requestSelectValues(val)}
      />
    </React.Fragment>
  );
};

export default RequestingFor;
