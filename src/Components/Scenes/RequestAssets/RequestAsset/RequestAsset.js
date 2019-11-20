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
    // position: 'fixed',
    // width: '31.21%',
    // height: '100vh',
    // background: 'rgba(0, 0, 0, 0.09)',
    // fontSize: '0.65em'
    // position: 'absolute',
    // display: 'flex',
    // flexDirection: 'column',
    // backgroundColor: 'rgba(0, 0, 0, 0.09)',
    // width: '31.21%',
    // height: '100vh',
    // color: color.white
  },
  pageContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.type === 'light' ? 'dark' : 'light',
    width: '100%',
    height: '100vh',
    color: color.white
  }
}));

const RequestAsset = props => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.pageContainer}>
        <AppBarContainer />
        <div className={classes.sidebar}>
          <RequestedForContainer />
          <RequestAssetTableContainer />
          <RequestAssetJustificationContainer />
        </div>
      </div>
    </>
  );
};
export default RequestAsset;
// <RequestAssetTableContainer />
// <RequestAssetJustificationContainer />
// <div className={classes.pageContainer}>
//       <AppBarContainer />
//       {isLoading ? (
//         <TableSkeleton />
//       ) : displaySearchResult ? (
//         <TableSectionContainer />
//       ) : null}
//       {!searchResultCopy.length > 0 ? <Splash /> : null}
//       {isSearchClicked ? <SearchContainer /> : null}
//     </div>
