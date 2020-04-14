import React from 'react';
import TableWrapper from '../../Presentational/Table/TableWrapper';
import MockGovernors from '../../../State/__mockData__/mockGovernors.json';

const GovernorsTable = (props: any) => {
  const titleText = `Governors`;
  const columns = [
    { name: 'Governor', property: 'governor' },
    { name: 'icon', property: 'icon' }
  ];

  return (
    <TableWrapper
      setTitleText={() => titleText}
      columns={columns}
      data={MockGovernors}
    />
  );
};

export default GovernorsTable;
