import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem } from '@material-ui/core';
import weight from '@edma/design-tokens/js/weight';
import RequestTableTitle from '../RequestTableTitle/RequestTableTitle';
import { transformRequests } from '../../../../State/helpers';
import TableWrapper from '../../../Presentational/Table/TableWrapper';
import Modal from '../../../Presentational/Modal/Modal';
import {
  setToggleSentCheckbox,
  setToggleSentAllCheckbox,
  reqDecisionRequestFetch,
  userRequestsFetch
} from '../../../../State/ViewRequests/actions';

const useStyles = makeStyles(theme => ({
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

  const { outboundRequests, isLoading, selectedSentRequests } = useSelector(
    ({ viewRequests }: any) => viewRequests
  );
  const userEmail = useSelector(({ currentUser }: any) => currentUser.EmpEmail);
  const userRole = useSelector(({ currentUser }: any) => currentUser.role);
  const dispatch = useDispatch();

  const handleOpenNotification = () => setNotification(true);
  const handleCloseNotification = () => setNotification(false);

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

  useEffect(() => {
    dispatch(userRequestsFetch(userEmail));
  }, [dispatch, userEmail]);

  return (
    <>
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
        setFirstColLink={(e: React.ChangeEvent, id: number) =>
          console.log(`request ${id} clicked`)
        }
        setFooterButtonClick={() => setIsModalOpenForRemove(true)}
      />
      {isModalOpenForRemove && (
        <Modal
          modalTitle={'Cancel Requests'}
          render={removeItemList}
          openModal={isModalOpenForRemove}
          handleModalToggle={() => setIsModalOpenForRemove(false)}
          handleRemoveSelected={() =>
            dispatch(reqDecisionRequestFetch('Cancelled', selectedSentRequests))
          }
          handleOpenNotification={handleOpenNotification}
        />
      )}
    </>
  );
};

export default SentRequests;
