import React, { FunctionComponent } from 'react';
import TableWrapper from '../../Presentational/Table/TableWrapper';
import MockGovernors from '../../../State/__mockData__/mockGovernors.json';

const GovernorsTable: FunctionComponent = (props: any) => {
  const titleText = `Governors`;
  const columns = [{ name: 'Governor', property: 'governor' }];

  return (
    <TableWrapper
      setTitleText={() => titleText}
      columns={columns}
      data={MockGovernors}
    />
  );
};

export default GovernorsTable;
