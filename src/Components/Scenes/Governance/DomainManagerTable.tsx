import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableWrapper from '../../Presentational/Table/TableWrapper';
import Modal from '../../Presentational/Modal/Modal';
import { setRemoveDomainManagers } from '../../../State/Governance/actions';

const DomainManagerTable = (props: any) => {
  const { managers, setSelectedRemoveRowId } = useSelector(
    (state: any) => state.governance
  );
  const titleText = `Domain Managers`;
  const columns = [
    { name: 'Name', property: 'name' },
    { name: 'Domain', property: 'domain' }
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const setRemoveDomainManager = () => dispatch(setRemoveDomainManagers());
  const removeManager = managers.reduce((acc: any, manager: any) => {
    if (manager.Id === setSelectedRemoveRowId) {
      acc.push(
        <p key={manager.Id}>
          Are you sure that you want to remove <strong>{manager.name}</strong>{' '}
          from being the manager levels?
        </p>
      );
    }
    return acc;
  }, []);

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
      <TableWrapper
        setTitleText={() => titleText}
        columns={columns}
        data={managers}
        remove={true}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default DomainManagerTable;
