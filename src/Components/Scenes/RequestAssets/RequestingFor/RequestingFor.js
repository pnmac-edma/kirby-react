import React from 'react';
import Select, { createFilter } from 'react-select';
import { makeStyles } from '@material-ui/core/styles';
import MenuList from './MenuList';

const useStyles = makeStyles({
  table: {
    width: 440
  }
});

const RequestingFor = props => {
  const { requestedFor, requestSelectValues } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <Select
        className={('basic-multi-select', classes.table)}
        filterOption={createFilter({ ignoreAccents: false })}
        isMulti
        components={{ MenuList }}
        options={requestedFor}
        onChange={val => requestSelectValues(val)}
      />
    </React.Fragment>
  );
};

export default RequestingFor;
