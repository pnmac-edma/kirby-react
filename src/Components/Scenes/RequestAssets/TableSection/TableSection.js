import React from 'react';

const TableSection = props => {
  const { searchResultCopy } = props;
  const countSelectedCheckbox = searchResultCopy.reduce(
    (totalCount, eachRow) => (eachRow.checked ? totalCount + 1 : totalCount),
    0
  );
  return <div>{countSelectedCheckbox > 0 ? <div></div> : null}</div>;
};

export default TableSection;
