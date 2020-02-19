import React from 'react';
import { Typography } from '@material-ui/core';

const NotFound = props => {
  const { searchedInput } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" id="tableTitle">
        Search results for {searchedInput}
      </Typography>
      <Typography>
        We couldn't find anything matching <strong>{searchedInput}</strong> in
        the lake
      </Typography>
    </React.Fragment>
  );
};

export default NotFound;
