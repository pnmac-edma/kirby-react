import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem } from '@material-ui/core';
import weight from '@edma/design-tokens/js/weight';
import RequestTableTitle from '../RequestTableTitle/RequestTableTitle';
import { transformRequests } from '../../../../State/helpers';
import TableWrapper from '../../../Presentational/Table/TableWrapper';
import Modal from '../../../Presentational/Modal/Modal';
import SnackBar from '../../../Presentational/Modal/SnackBar';
import {
  setToggleSentCheckbox,
  setToggleSentAllCheckbox,
  reqDecisionRequestFetch,
  userRequestsFetch,
  setRequestListType
} from '../../../../State/ViewRequests/actions';
import { generateRequestTypeString } from '../../../../State/ViewRequests/helpers';

const useStyles = makeStyles(theme => ({
  removeDescription: {
    marginTop: 0
  },
  listItemText: {
    display: 'list-item',
    textTransform: 'capitalize',
    fontWeight: weight['bold']
  }
}));

const SentRequests = () => {
  const classes = useStyles();

  const [isModalOpenForRemove, setIsModalOpenForRemove] = useState(false);
  const [notification, setNotification] = useState(false);

  const {
    message,
    outboundRequests,
    isLoading,
    selectedSentRequests
  } = useSelector(({ viewRequests }: any) => viewRequests);
  const userEmail = useSelector(({ currentUser }: any) => currentUser.EmpEmail);
  const userRole = useSelector(({ currentUser }: any) => currentUser.role);
  const dispatch = useDispatch();

  const history = useHistory();

  const columns = [
    {
      name: 'Request',
      property: 'databasename'
    },
    {
      name: 'Description',
      property: 'description'
    },
    {
      name: 'Approver',
      property: 'approver'
    },
    {
      name: 'Sensitivity',
      property: 'requestsensitivity'
    },
    {
      name: 'Status',
      property: 'requeststatus'
    },
    {
      name: 'Date Requested',
      property: 'createddate'
    }
  ];

  const reqs = transformRequests(outboundRequests, userRole);
  const numReqSelected =
    selectedSentRequests.length > 0 ? selectedSentRequests.length : '';
  const isPlurl = selectedSentRequests.length !== 1 ? 's' : '';
  const footerButtonText = `Cancel ${numReqSelected} request${isPlurl}`;

  const removeItemList = reqs.reduce((arr: Array<JSX.Element>, item: any) => {
    if (selectedSentRequests.includes(item.Id)) {
      arr.push(
        <ListItem className={classes.listItemText} key={item.Id}>
          {item.databasename}
        </ListItem>
      );
    }
    return arr;
  }, []);

  const render = (
    <>
      <p className={classes.removeDescription}>
        Are you sure that you want to cancel the following requests? This action
        cannot be undone.
      </p>
      {removeItemList}
    </>
  );

  useEffect(() => {
    dispatch(userRequestsFetch(userEmail));
  }, [dispatch, message, userEmail]);

  return (
    <>
      <SnackBar
        message={message}
        notification={notification}
        handleOpenNotification={() => setNotification(true)}
        handleCloseNotification={() => setNotification(false)}
      />
      <RequestTableTitle title="Sent Requests" />
      <TableWrapper
        isLoading={isLoading}
        selected={selectedSentRequests}
        columns={columns}
        data={reqs}
        setToggleCheckbox={(selected: Array<number>, id: number) =>
          dispatch(setToggleSentCheckbox(selected, id))
        }
        setToggleAllCheckbox={(selected: Array<number>, data: Array<number>) =>
          dispatch(setToggleSentAllCheckbox(selected, data))
        }
        footerButtonText={footerButtonText}
        setFooterButtonClick={() => setIsModalOpenForRemove(true)}
        setFirstColLink={(e: React.ChangeEvent, id: number) => {
          const requestTypeParam = generateRequestTypeString(reqs, id);
          const urlWithId = `/requests/${id}/${requestTypeParam}`;
          dispatch(setRequestListType('outbound'));
          history.push(urlWithId);
        }}
      />
      {isModalOpenForRemove && (
        <Modal
          modalTitle={'Cancel Requests'}
          render={render}
          openModal={isModalOpenForRemove}
          handleModalToggle={() => setIsModalOpenForRemove(false)}
          handleRemoveSelected={() =>
            dispatch(reqDecisionRequestFetch('Cancelled', selectedSentRequests))
          }
          handleOpenNotification={() => setNotification(true)}
          footerButtonText={'Confirm Cancellation'}
        />
      )}
    </>
  );
};

export default SentRequests;
