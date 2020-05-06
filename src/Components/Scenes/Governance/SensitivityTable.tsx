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

const SensitivityTable = ({ isModalOpen, setIsModalOpen }: any) => {
  const { sensitivity, setSelectedRemoveRowId, isLoading } = useSelector(
    (state: any) => state.governance
  );
  const titleText = `Sensitivity Levels`;
  const columns = [
    { name: 'Sensitivity', property: 'sensitivity' },
    { name: 'Description', property: 'description' }
  ];
  const messageForRemove = `Sensitivity Level was removed successfully.`;
  const messageForAdded = `Sensitivity Level was added successfully.`;
  const [isModalOpenForRemove, setIsModalOpenForRemove] = useState(false);
  const [sensitive, setSensitive] = useState('');
  const [createdByEmail, setCreatedByEmail] = useState('');
  const [description, setDescription] = useState('');

  const [notification, setNotification] = useState(false);
  const dispatch = useDispatch();

  const handleOpenNotification = () => setNotification(true);
  const handleCloseNotification = () => setNotification(false);

  useEffect(() => {
    dispatch(sensitivityLevelsRequestFetch());
  }, [dispatch]);

  const setRemoveSensitivityLevel = () =>
    dispatch(deleteSensitivityRequestFetch());
  const setGovernorsRequestFetch = () =>
    dispatch(
      addSensitivityLevelsRequestFetch(sensitive, createdByEmail, description)
    );
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

  const render = [
    <>
      <TextField
        id="standard-basic"
        label="Sensitivity"
        helperText="Please provide sensitivity"
        onChange={e => setSensitive(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="Createdby Email"
        helperText="Please provide createdby email"
        onChange={e => setCreatedByEmail(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="Description"
        helperText="Please provide description"
        onChange={e => setDescription(e.target.value)}
      />
    </>
  ];

  return (
    <>
      <Modal
        modalTitle={'Remove Sensitivity Level'}
        render={removeGovernor}
        openModal={isModalOpenForRemove}
        handleModalToggle={setIsModalOpenForRemove}
        handleRemoveSelected={setRemoveSensitivityLevel}
        notification={notification}
        handleOpenNotification={handleOpenNotification}
        handleCloseNotification={handleCloseNotification}
        message={messageForRemove}
      />
      <Modal
        modalTitle={'Add Sensitivity Levels'}
        render={render}
        openModal={isModalOpen}
        handleModalToggle={setIsModalOpen}
        handleRemoveSelected={setGovernorsRequestFetch}
        notification={notification}
        handleOpenNotification={handleOpenNotification}
        handleCloseNotification={handleCloseNotification}
        message={messageForAdded}
      />
      <TableWrapper
        isLoading={isLoading}
        setTitleText={() => titleText}
        columns={columns}
        data={sensitivity}
        remove={true}
        setIsModalOpen={setIsModalOpenForRemove}
      />
    </>
  );
};

export default SensitivityTable;
