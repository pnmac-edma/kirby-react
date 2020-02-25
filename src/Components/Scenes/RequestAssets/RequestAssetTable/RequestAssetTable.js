import React from 'react';
import TableWrapper from '../../../Presentational/Table/TableWrapper';

const TableSection = props => {
  const {
    data,
    handleModalToggle,
    setToggleAssetCheckbox,
    setToggleAssetAllCheckbox,
    selected
  } = props;

  const columns = [
    { name: 'Name', property: 'name' },
    { name: 'Date Created', property: 'createddate' }
  ];

  const titleText = 'Assets in this Request';

  const footerButtonText = `Remove ${selected.length} selected`;

  return (
    <TableWrapper
      setTitleText={() => titleText}
      selected={selected}
      columns={columns}
      data={data}
      setToggleCheckbox={setToggleAssetCheckbox}
      setToggleAllCheckbox={setToggleAssetAllCheckbox}
      footerButtonText={footerButtonText}
      handleRequestClick={id => console.log(`request ${id} clicked`)}
      handleFooterButtonClick={handleModalToggle}
    />
  );
};

export default TableSection;
