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

const SensitivityTable = ({
  isModalOpenAddGovernor,
  setIsModalOpenAddGovernors
}: any) => {
  const { sensitivity, setSelectedRemoveRowId, isLoading } = useSelector(
    (state: any) => state.governance
  );
  const titleText = `Sensitivity Levels`;
  const columns = [
    { name: 'Sensitivity', property: 'sensitivity' },
    { name: 'Description', property: 'description' }
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sensitive, setSensitive] = useState('');
  const [createdByEmail, setCreatedByEmail] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

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
      {isModalOpen ? (
        <Modal
          modalTitle={'Remove Sensitivity Level'}
          render={removeGovernor}
          openModal={isModalOpen}
          handleModalToggle={setIsModalOpen}
          handleRemoveSelected={setRemoveSensitivityLevel}
        />
      ) : null}
      <Modal
        modalTitle={'Add Sensitivity Levels'}
        render={render}
        openModal={isModalOpenAddGovernor}
        handleModalToggle={setIsModalOpenAddGovernors}
        handleRemoveSelected={setGovernorsRequestFetch}
      />
      <TableWrapper
        isLoading={isLoading}
        setTitleText={() => titleText}
        columns={columns}
        data={sensitivity}
        remove={true}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default SensitivityTable;
