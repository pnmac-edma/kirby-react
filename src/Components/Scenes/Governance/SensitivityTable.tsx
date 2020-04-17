import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableWrapper from '../../Presentational/Table/TableWrapper';
import Modal from '../../Presentational/Modal/Modal';
import { setRemoveSensitivityLevels } from '../../../State/Governance/actions';

const SensitivityTable = (props: any) => {
  const { sensitivity, setSelectedRemoveRowId } = useSelector(
    (state: any) => state.governance
  );
  const titleText = `Sensitivity Levels`;
  const columns = [
    { name: 'Sensitivity', property: 'sensitivity' },
    { name: 'Description', property: 'description' }
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const setRemoveSensitivityLevel = () =>
    dispatch(setRemoveSensitivityLevels());
  const removeGovernor = sensitivity.reduce((acc: any, sensitivity: any) => {
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
      <TableWrapper
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
