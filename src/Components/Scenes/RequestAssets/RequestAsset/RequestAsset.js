import React from 'react';
import RequestAssetTableContainer from '../RequestAssetTable/RequestAssetTable-Container';
import RequestAssetJustificationContainer from '../RequestAssetJustification/RequestAssetJustification-Container';
import RequestedForContainer from '../RequestedFor/RequestedFor-Container';
import AppBarContainer from '../../Chrome/AppBar/AppBar-Container';
import { makeStyles } from '@material-ui/core/styles';
import color from '@edma/design-tokens/js/color';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  sidebar: {
    position: 'fixed',
    width: '31.21%',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.09)',
    fontSize: '0.65em'
  },
  pageContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.type === 'light' ? 'dark' : 'light',
    width: '100%',
    height: '100vh',
    color: color.white
  },
  sideTable: {
    width: '62%',
    marginLeft: '50vh'
  },
  dropdown: {
    marginRight: '50vh',
    marginTop: '20vh',
    marginLeft: '1vh'
  }
}));

const RequestAsset = props => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.pageContainer}>
        <AppBarContainer />
        <div className={classes.sideTable}>
          <RequestAssetTableContainer />
          <RequestAssetJustificationContainer />
        </div>
        <div className={classes.sidebar}>
          <div className={classes.dropdown}>
            <h2>Request Assets</h2>
            <RequestedForContainer />
          </div>
        </div>
      </div>
    </>
  );
};
export default RequestAsset;
