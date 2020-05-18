import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Typography } from '@material-ui/core';
import { color, fontSize } from '@edma/design-tokens';
import { makeStyles } from '@material-ui/core/styles';
import RequestAssetTable from '../RequestAssetTable/RequestAssetTable';
import RequestAssetJustification from '../RequestAssetJustification/RequestAssetJustification';
import RequestingFor from '../RequestingFor/RequestingFor';
import RequestedBy from '../RequestedBy/RequestedBy';
import SnackBar from '../../../Presentational/SnackBar/SnackBar';
import RemoveModal from '../RemoveModal/RemoveModal';
import MakeRequests from '../MakeRequests/MakeRequests';
import { getEmployeesFetch } from '../../../../State/RequestAsset/actions';
import { handleSelectedEmployees } from '../../../../State/RequestAsset/actions';

const useStyles = makeStyles(theme => ({
  flexStructure: {
    display: 'flex',
    justifyContent: 'left'
  },
  sidebar: {
    background: theme.palette.type === 'light' ? color.g100 : color.g800,
    fontSize: fontSize[1],
    marginTop: '-10rem',
    marginBottom: '-10rem',
    overflow: 'hidden',
    paddingTop: '10rem',
    maxWidth: 430,
    minWidth: 300,
    width: '100%'
  },
  sideTable: {
    width: '70%'
  },
  sideBarPostion: {
    margin: '0 1rem',
    color: theme.palette.type === 'light' ? color.black : color.white
  },
  dividerStyle: {
    width: '100%',
    marginBottom: 32,
    marginTop: 24
  },
  heading: {
    margin: '1rem 0 2rem',
    color: theme.palette.type === 'light' ? color.black : color.white
  }
}));

const RequestAsset = () => {
  const classes = useStyles();

  const [notification, setNotification] = React.useState(false);

  const { openModal } = useSelector(({ requestAssets }: any) => requestAssets);
  const { employees } = useSelector(({ requestAssets }: any) => requestAssets);
  const dispatch = useDispatch();

  const handleOpenNotification = () => {
    setNotification(true);
  };

  const handleCloseNotification = () => {
    setNotification(false);
  };

  useEffect(() => {
    dispatch(getEmployeesFetch());
  }, [dispatch]);

  return (
    <div className={classes.flexStructure}>
      <div className={classes.sidebar}>
        <div className={classes.sideBarPostion}>
          <Typography variant="h2" className={classes.heading}>
            Request Assets
          </Typography>
          <RequestedBy />
          <Divider className={classes.dividerStyle} />
          <RequestingFor
            isMultiple={true}
            dropDownText={`Requesting For`}
            data={employees}
            handleChange={handleSelectedEmployees}
          />
        </div>
      </div>
      <div className={classes.sideTable}>
        <RequestAssetTable />
        {openModal && (
          <RemoveModal handleOpenNotification={handleOpenNotification} />
        )}
        <RequestAssetJustification />
        <MakeRequests />
        <SnackBar
          message="The Assets in your request were updated successfully."
          handleCloseNotification={handleCloseNotification}
          notification={notification}
        />
      </div>
    </div>
  );
};

export default RequestAsset;
