import React, { useEffect } from 'react';
import { Divider } from '@material-ui/core';
import color from '@edma/design-tokens/js/color';
import fontSize from '@edma/design-tokens/js/fontSize';
import { makeStyles } from '@material-ui/core/styles';
import RequestAssetTableContainer from '../RequestAssetTable/RequestAssetTable-Container';
import RequestAssetJustificationContainer from '../RequestAssetJustification/RequestAssetJustification-Container';
import RequestingForContainer from '../RequestingFor/RequestingFor-Container';
import RequestedByContainer from '../RequestedBy/RequestedBy-Container';
import SnackBarContainer from '../SnackBar/SnackBar-Container';
import RemoveModalContainer from '../RemoveModal/RemoveModal-Container';
import MakeRequestsContainer from '../MakeRequests/MakeRequests-Container';

const useStyles = makeStyles(theme => ({
  flexStructure: {
    display: 'flex',
    justifyContent: 'center'
  },
  sidebar: {
    background: color.g200,
    fontSize: fontSize[1],
    marginTop: '-10rem',
    marginBottom: '-10rem',
    overflow: 'hidden',
    paddingTop: '10rem'
  },
  sideTable: {
    width: '70%'
  },
  sideBarPostion: {
    margin: '2rem 3rem 0rem 1rem',
    color: 'black'
  },
  dividerStyle: {
    width: 400,
    marginBottom: 32,
    marginTop: 24
  }
}));

const RequestAsset = ({ getEmployeesFetch, openModal }) => {
  const classes = useStyles();
  useEffect(() => {
    getEmployeesFetch();
  }, [getEmployeesFetch]);

  const [notification, setNotification] = React.useState(false);

  const handleOpenNotification = () => {
    setNotification(true);
  };

  const handleCloseNotification = () => {
    setNotification(false);
  };

  return (
    <div className={classes.flexStructure}>
      <div className={classes.sidebar}>
        <div className={classes.sideBarPostion}>
          <p>Request Assets</p>
          <RequestedByContainer />
          <Divider className={classes.dividerStyle} />
          <RequestingForContainer />
        </div>
      </div>

      <div className={classes.sideTable}>
        <RequestAssetTableContainer />
        {openModal && (
          <RemoveModalContainer
            handleOpenNotification={handleOpenNotification}
          />
        )}
        <RequestAssetJustificationContainer />
        <MakeRequestsContainer />
        <SnackBarContainer
          handleCloseNotification={handleCloseNotification}
          notification={notification}
        />
      </div>
    </div>
  );
};
export default RequestAsset;
