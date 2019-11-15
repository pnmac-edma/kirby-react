import React from 'react';
import { Typography } from '@material-ui/core';

const NotFound = props => {
  const { searchInput } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" id="tableTitle">
        Search result for {searchInput}
      </Typography>
      <Typography>
        We couldn't find anything matching <strong>{searchInput}</strong> in the
        lake
      </Typography>
    </React.Fragment>
  );
};

export default NotFound;
