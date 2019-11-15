import React from 'react';
import RequestAssetTableContainer from '../RequestAssetTable/RequestAssetTable-Container';
import RequestAssetJustificationContainer from '../RequestAssetJustification/RequestAssetJustification-Container';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}));

const RequestAsset = props => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <RequestAssetTableContainer />
      <RequestAssetJustificationContainer />
    </div>
  );
};
export default RequestAsset;
