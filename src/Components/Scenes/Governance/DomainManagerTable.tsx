import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableWrapper from '../../Presentational/Table/TableWrapper';
import Modal from '../../Presentational/Modal/Modal';
import {
  deleteDomainOwnersRequestFetch,
  domainOwnersRequestFetch,
  addDomainOwnersRequestFetch,
  setSelectedGovernor
} from '../../../State/Governance/actions';
import { setSelectedDomainValues } from '../../../State/Shared/actions';
import SnackBar from '../../Presentational/Modal/SnackBar';
import RequestingForContainer from '../RequestAssets/RequestingFor/RequestingFor';

const DomainManagerTable = ({ isModalOpen, setIsModalOpen }: any) => {
  const [isModalOpenForRemove, setIsModalOpenForRemove] = useState(false);
  const {
    domainOwners,
    setSelectedRemoveRowId,
    isLoading,
    message
  } = useSelector((state: any) => state.governance);
  const { domains } = useSelector((state: any) => state.shared);
  const { employees } = useSelector(({ requestAssets }: any) => requestAssets);
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
    dispatch(addDomainOwnersRequestFetch());
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
      <RequestingForContainer
        isMultiple={false}
        dropDownText={`Manager Name`}
        data={employees}
        handleChange={setSelectedGovernor}
      />
      <RequestingForContainer
        isMultiple={false}
        dropDownText={`Domain`}
        data={domains}
        handleChange={setSelectedDomainValues}
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
