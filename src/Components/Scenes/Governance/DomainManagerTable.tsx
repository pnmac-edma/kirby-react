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
import SnackBar from '../../Presentational/Modal/SnackBar';

const DomainManagerTable = ({ isModalOpen, setIsModalOpen }: any) => {
  const [isModalOpenForRemove, setIsModalOpenForRemove] = useState(false);
  const [domain, setDomain] = useState('');
  const [owneremail, setOwnerEmail] = useState('');
  const {
    domainOwners,
    setSelectedRemoveRowId,
    isLoading,
    message
  } = useSelector((state: any) => state.governance);
  const [notification, setNotification] = useState(false);
  const dispatch = useDispatch();

  const handleOpenNotification = () => setNotification(true);
  const handleCloseNotification = () => setNotification(false);

  const titleText = `Domain Managers`;
  const columns = [
    { name: 'Name', property: 'owneremail' },
    { name: 'Domain', property: 'domain' }
  ];

  useEffect(() => {
    dispatch(domainOwnersRequestFetch());
  }, [dispatch]);

  const setRemoveDomainManager = () =>
    dispatch(deleteDomainOwnersRequestFetch());
  const setGovernorsRequestFetch = () =>
    dispatch(addDomainOwnersRequestFetch(domain, owneremail));
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

  const render = (
    <>
      <TextField
        label="User Name"
        fullWidth
        helperText="Please provide username"
        onChange={e => setDomain(e.target.value)}
      />
      <TextField
        label="Owner Email"
        fullWidth
        helperText="Please provide useremail"
        onChange={e => setOwnerEmail(e.target.value)}
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
          render={removeManager}
          openModal={isModalOpenForRemove}
          handleModalToggle={setIsModalOpenForRemove}
          handleRemoveSelected={setRemoveDomainManager}
          handleOpenNotification={handleOpenNotification}
          footerButtonText={'Yes, Remove Owner'}
        />
      )}
      <TableWrapper
        isLoading={isLoading}
        setTitleText={() => titleText}
        columns={columns}
        data={domainOwners}
        remove={true}
        setIsModalOpen={setIsModalOpenForRemove}
      />
      {isModalOpen && (
        <Modal
          modalTitle={'Add Business Owners'}
          render={render}
          openModal={isModalOpen}
          handleModalToggle={setIsModalOpen}
          handleRemoveSelected={setGovernorsRequestFetch}
          handleOpenNotification={handleOpenNotification}
          footerButtonText={'Add Manager'}
        />
      )}
    </>
  );
};

export default DomainManagerTable;
