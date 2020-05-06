import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableWrapper from '../../Presentational/Table/TableWrapper';
import Modal from '../../Presentational/Modal/Modal';
import {
  deleteDomainOwnersRequestFetch,
  domainOwnersRequestFetch,
  addDomainOwnersRequestFetch
} from '../../../State/Governance/actions';
import { TextField } from '@material-ui/core';

const DomainManagerTable = ({ isModalOpen, setIsModalOpen }: any) => {
  const titleText = `Domain Managers`;
  const columns = [
    { name: 'Name', property: 'owneremail' },
    { name: 'Domain', property: 'domain' }
  ];
  const messageForRemove = `Domain Manager was removed successfully.`;
  const messageForAdded = `Domain Manager was added successfully.`;
  const [isModalOpenForRemove, setIsModalOpenForRemove] = useState(false);
  const [domain, setDomain] = useState('');
  const [createdByEmail, setCreatedByEmail] = useState('');
  const [owneremail, setOwnerEmail] = useState('');

  const { domainOwners, setSelectedRemoveRowId, isLoading } = useSelector(
    (state: any) => state.governance
  );
  const [notification, setNotification] = useState(false);
  const dispatch = useDispatch();

  const handleOpenNotification = () => setNotification(true);
  const handleCloseNotification = () => setNotification(false);

  useEffect(() => {
    dispatch(domainOwnersRequestFetch());
  }, [dispatch]);

  const setRemoveDomainManager = () =>
    dispatch(deleteDomainOwnersRequestFetch());
  const setGovernorsRequestFetch = () =>
    dispatch(addDomainOwnersRequestFetch(domain, createdByEmail, owneremail));
  let removeManager;
  if (domainOwners !== null) {
    removeManager = domainOwners.reduce((acc: any, manager: any) => {
      if (manager.Id === setSelectedRemoveRowId) {
        acc.push(
          <p key={manager.Id}>
            Are you sure that you want to remove{' '}
            <strong>{manager.owneremail}</strong> from being the manager levels?
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
        helperText="Please provide username"
        onChange={e => setDomain(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="Createdby Email"
        helperText="Please provide createdby email"
        onChange={e => setCreatedByEmail(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="Owner Email"
        helperText="Please provide useremail"
        onChange={e => setOwnerEmail(e.target.value)}
      />
    </>
  ];

  return (
    <>
      <Modal
        modalTitle={'Remove Sensitivity Level'}
        render={removeManager}
        openModal={isModalOpenForRemove}
        handleModalToggle={setIsModalOpenForRemove}
        handleRemoveSelected={setRemoveDomainManager}
        notification={notification}
        handleOpenNotification={handleOpenNotification}
        handleCloseNotification={handleCloseNotification}
        message={messageForRemove}
      />
      <Modal
        modalTitle={'Add Business Owners'}
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
        data={domainOwners}
        remove={true}
        setIsModalOpen={setIsModalOpenForRemove}
      />
    </>
  );
};

export default DomainManagerTable;
