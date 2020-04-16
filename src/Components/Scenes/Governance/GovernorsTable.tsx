import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import TableWrapper from '../../Presentational/Table/TableWrapper';

const GovernorsTable: FunctionComponent = (props: any) => {
  const { governors } = useSelector((state: any) => state.governance);
  const titleText = `Governors`;
  const columns = [{ name: 'Governor', property: 'governor' }];

  return (
    <TableWrapper
      setTitleText={() => titleText}
      columns={columns}
      data={governors}
      remove={[]}
    />
  );
};

export default GovernorsTable;
