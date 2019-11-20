import React from 'react';
import RequestAssetTableContainer from '../RequestAssetTable/RequestAssetTable-Container';
import RequestAssetJustificationContainer from '../RequestAssetJustification/RequestAssetJustification-Container';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  sidebar: {
    position: 'fixed',
    width: '25%',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.09)',
    fontSize: '0.65em'
  }
}));

const RequestAsset = props => {
  const classes = useStyles();
  return (
    <div className={(classes.container, classes.sidebar)}>
      <RequestAssetTableContainer />
      <RequestAssetJustificationContainer />
    </div>
  );
};
export default RequestAsset;
