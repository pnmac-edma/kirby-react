import React from 'react';
import { useSelector } from 'react-redux';
import TableWrapper from '../../Presentational/Table/TableWrapper';

const GovernorsTable = (props: any) => {
  const { governors } = useSelector((state: any) => state.governance);
  const titleText = `Governors`;
  const columns = [{ name: 'Governor', property: 'governor' }];

  return (
    <TableWrapper
      setTitleText={() => titleText}
      columns={columns}
      data={governors}
      remove={true}
    />
  );
};

export default GovernorsTable;
