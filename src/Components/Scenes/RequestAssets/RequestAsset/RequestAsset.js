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
    marginLeft: '64vh'
  },
  sideBarPostion: {
    marginRight: '50vh',
    marginTop: '12vh',
    marginLeft: '1vh',
    color: 'black'
  },
  title: {
    flex: '0 0 auto',
    width: '100%'
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
        <div className="sidebar">
          <div className={classes.sideBarPostion}>
            <h1>Request Assets</h1>
            <RequestedForContainer />
          </div>
        </div>
      </div>
    </>
  );
};
export default RequestAsset;
