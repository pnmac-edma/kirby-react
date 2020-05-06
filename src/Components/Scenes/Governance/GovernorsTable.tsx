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

const GovernorsTable = ({ isModalOpen, setIsModalOpen }: any) => {
  const { governors, setSelectedRemoveRowId } = useSelector(
    (state: any) => state.governance
  );
  const titleText = `Governors`;
  const columns = [{ name: 'Governor', property: 'username' }];
  const [isModalOpenForRemove, setIsModalOpenForRemove] = useState(false);
  const [userName, setUserName] = useState('');
  const [createdByName, setCreatedByName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(governorsRequestFetch());
  }, [dispatch]);

  const setRemoveGovernors = () => dispatch(deleteGovernorsRequestFetch());
  const setGovernorsRequestFetch = () =>
    dispatch(addGovernorsRequestFetch(userName, createdByName, userEmail));
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

  const render = [
    <>
      <TextField
        id="standard-basic"
        label="User Name"
        fullWidth
        helperText="Please provide username"
        onChange={e => setUserName(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="Createdby Name"
        fullWidth
        helperText="Please provide createdby email"
        onChange={e => setCreatedByName(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="User Email"
        fullWidth
        helperText="Please provide useremail"
        onChange={e => setUserEmail(e.target.value)}
      />
    </>
  ];

  return (
    <>
      <Modal
        modalTitle={'Remove Govenor'}
        render={removeGovernor}
        openModal={isModalOpenForRemove}
        handleModalToggle={setIsModalOpenForRemove}
        handleRemoveSelected={setRemoveGovernors}
      />
      <Modal
        modalTitle={'Add Govenor'}
        render={render}
        openModal={isModalOpen}
        handleModalToggle={setIsModalOpen}
        handleRemoveSelected={setGovernorsRequestFetch}
      />
      <TableWrapper
        setTitleText={() => titleText}
        columns={columns}
        data={governors}
        remove={true}
        setIsModalOpen={setIsModalOpenForRemove}
      />
    </>
  );
};

export default GovernorsTable;
