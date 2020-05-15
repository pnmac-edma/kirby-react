import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableWrapper from '../../Presentational/Table/TableWrapper';
import Modal from '../../Presentational/Modal/Modal';
import {
  governorsRequestFetch,
  deleteGovernorsRequestFetch,
  addGovernorsRequestFetch
} from '../../../State/Governance/actions';
import { TextField } from '@material-ui/core/';
import SnackBar from '../../Presentational/Modal/SnackBar';

const GovernorsTable = ({ isModalOpen, setIsModalOpen }: any) => {
  const { governors, setSelectedRemoveRowId, message } = useSelector(
    (state: any) => state.governance
  );
  const [isModalOpenForRemove, setIsModalOpenForRemove] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [notification, setNotification] = useState(false);
  const dispatch = useDispatch();

  const handleOpenNotification = () => setNotification(true);
  const handleCloseNotification = () => setNotification(false);

  const titleText = `Governors`;
  const columns = [{ name: 'Governor', property: 'useremail' }];

  useEffect(() => {
    dispatch(governorsRequestFetch());
  }, [dispatch]);

  const setRemoveGovernors = () => dispatch(deleteGovernorsRequestFetch());
  const setGovernorsRequestFetch = () =>
    dispatch(addGovernorsRequestFetch(userName, userEmail));
  let removeGovernor;
  if (governors !== null) {
    removeGovernor = governors.reduce((acc: any, governor: any) => {
      if (governor.Id === setSelectedRemoveRowId) {
        acc.push(
          <p key={governor.Id}>
            Are you sure that you want to remove{' '}
            <strong>{governor.governor}</strong> from the Governance group?
          </p>
        );
      }
      return acc;
    }, []);
  }

  const render = (
    <>
      <TextField
        label="User Name"
        fullWidth
        helperText="Please provide username"
        onChange={e => setUserName(e.target.value)}
      />
      <TextField
        label="User Email"
        fullWidth
        helperText="Please provide useremail"
        onChange={e => setUserEmail(e.target.value)}
      />
    </>
  );

  return (
    <>
      <SnackBar
        message={message}
        notification={notification}
        handleOpenNotification={handleOpenNotification}
        handleCloseNotification={handleCloseNotification}
      />
      {isModalOpenForRemove && (
        <Modal
          modalTitle={'Remove Govenor'}
          render={removeGovernor}
          openModal={isModalOpenForRemove}
          handleModalToggle={setIsModalOpenForRemove}
          handleRemoveSelected={setRemoveGovernors}
          handleOpenNotification={handleOpenNotification}
          footerButtonText={'Yes, Remove Govenor'}
        />
      )}
      <TableWrapper
        setTitleText={() => titleText}
        columns={columns}
        data={governors}
        remove={true}
        setIsModalOpen={setIsModalOpenForRemove}
      />
      {isModalOpen && (
        <Modal
          modalTitle={'Add Govenor'}
          render={render}
          openModal={isModalOpen}
          handleModalToggle={setIsModalOpen}
          handleRemoveSelected={setGovernorsRequestFetch}
          handleOpenNotification={handleOpenNotification}
          footerButtonText={'Add Governor'}
        />
      )}
    </>
  );
};

export default GovernorsTable;
