import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableWrapper from '../../Presentational/Table/TableWrapper';
import Modal from '../../Presentational/Modal/Modal';
import { setRemoveGovernor } from '../../../State/Governance/actions';

const SensitivityTable = (props: any) => {
  const { governors, setSelectedRemoveRowId } = useSelector(
    (state: any) => state.governance
  );
  const titleText = `Governors`;
  const columns = [{ name: 'Governor', property: 'governor' }];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const setRemoveGovernors = () => dispatch(setRemoveGovernor());
  const removeGovernor = governors.reduce((acc: any, governor: any) => {
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

  return (
    <>
      {isModalOpen ? (
        <Modal
          modalTitle={'Remove Govenor'}
          render={removeGovernor}
          openModal={isModalOpen}
          handleModalToggle={setIsModalOpen}
          handleRemoveSelected={setRemoveGovernors}
        />
      ) : null}
      <TableWrapper
        setTitleText={() => titleText}
        columns={columns}
        data={governors}
        remove={true}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default SensitivityTable;
