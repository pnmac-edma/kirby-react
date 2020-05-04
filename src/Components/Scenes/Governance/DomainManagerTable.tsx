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

const DomainManagerTable = ({
  isModalOpenAddGovernor,
  setIsModalOpenAddGovernors
}: any) => {
  const titleText = `Domain Managers`;
  const columns = [
    { name: 'Name', property: 'owneremail' },
    { name: 'Domain', property: 'domain' }
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [domain, setDomain] = useState('');
  const [createdByEmail, setCreatedByEmail] = useState('');
  const [owneremail, setOwnerEmail] = useState('');

  const { domainOwners, setSelectedRemoveRowId, isLoading } = useSelector(
    (state: any) => state.governance
  );
  const dispatch = useDispatch();

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
      {isModalOpen ? (
        <Modal
          modalTitle={'Remove Sensitivity Level'}
          render={removeManager}
          openModal={isModalOpen}
          handleModalToggle={setIsModalOpen}
          handleRemoveSelected={setRemoveDomainManager}
        />
      ) : null}
      <Modal
        modalTitle={'Add Business Owners'}
        render={render}
        openModal={isModalOpenAddGovernor}
        handleModalToggle={setIsModalOpenAddGovernors}
        handleRemoveSelected={setGovernorsRequestFetch}
      />
      <TableWrapper
        isLoading={isLoading}
        setTitleText={() => titleText}
        columns={columns}
        data={domainOwners}
        remove={true}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default DomainManagerTable;
