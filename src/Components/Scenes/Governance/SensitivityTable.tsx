import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableWrapper from '../../Presentational/Table/TableWrapper';
import Modal from '../../Presentational/Modal/Modal';
import {
  deleteSensitivityRequestFetch,
  sensitivityLevelsRequestFetch,
  addSensitivityLevelsRequestFetch
} from '../../../State/Governance/actions';
import { TextField } from '@material-ui/core';
import SnackBar from '../../Presentational/Modal/SnackBar';

const SensitivityTable = ({ isModalOpen, setIsModalOpen }: any) => {
  const {
    sensitivity,
    setSelectedRemoveRowId,
    isLoading,
    message
  } = useSelector((state: any) => state.governance);
  const [isModalOpenForRemove, setIsModalOpenForRemove] = useState(false);
  const [sensitive, setSensitive] = useState('');
  const [description, setDescription] = useState('');

  const [notification, setNotification] = useState(false);
  const dispatch = useDispatch();

  const handleOpenNotification = () => setNotification(true);
  const handleCloseNotification = () => setNotification(false);

  const titleText = `Sensitivity Levels`;
  const columns = [
    { name: 'Sensitivity', property: 'sensitivity' },
    { name: 'Description', property: 'description' }
  ];

  useEffect(() => {
    dispatch(sensitivityLevelsRequestFetch());
  }, [dispatch]);

  const setRemoveSensitivityLevel = () =>
    dispatch(deleteSensitivityRequestFetch());
  const setGovernorsRequestFetch = () =>
    dispatch(addSensitivityLevelsRequestFetch(sensitive, description));
  let removeGovernor;
  if (sensitivity !== null) {
    removeGovernor = sensitivity.reduce((acc: any, sensitivity: any) => {
      if (sensitivity.Id === setSelectedRemoveRowId) {
        acc.push(
          <p key={sensitivity.Id}>
            Are you sure that you want to remove{' '}
            <strong>{sensitivity.sensitivity}</strong> from the availbale
            sensitivity levels?
          </p>
        );
      }
      return acc;
    }, []);
  }

  const render = (
    <>
      <TextField
        label="Sensitivity"
        fullWidth
        helperText="Please provide sensitivity"
        onChange={e => setSensitive(e.target.value)}
      />
      <TextField
        label="Description"
        fullWidth
        helperText="Please provide description"
        onChange={e => setDescription(e.target.value)}
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
          modalTitle={'Remove Sensitivity Level'}
          render={removeGovernor}
          openModal={isModalOpenForRemove}
          handleModalToggle={setIsModalOpenForRemove}
          handleRemoveSelected={setRemoveSensitivityLevel}
          handleOpenNotification={handleOpenNotification}
        />
      )}
      <TableWrapper
        isLoading={isLoading}
        setTitleText={() => titleText}
        columns={columns}
        data={sensitivity}
        remove={true}
        setIsModalOpen={setIsModalOpenForRemove}
      />
      {isModalOpen && (
        <Modal
          modalTitle={'Add Sensitivity Levels'}
          render={render}
          openModal={isModalOpen}
          handleModalToggle={setIsModalOpen}
          handleRemoveSelected={setGovernorsRequestFetch}
          handleOpenNotification={handleOpenNotification}
        />
      )}
    </>
  );
};

export default SensitivityTable;
