import React from 'react';
import TableHeadTitle from '../TableHeadTitle/TableHeadTitle-Container';
import RequestTableContainer from '../../ViewRequests/RequestTable';

const TableSection = props => {
  const { requestAssetsClick, searchResultCopy } = props;
  const tableColumns = [
    { name: 'Name', property: 'name' },
    { name: 'Description', property: 'description' },
    { name: 'Domain', property: 'domain' },
    { name: 'owner', property: 'createdbyemail' },
    { name: 'Date Requested', property: 'createddate' }
  ];
  const setFooterButtonText = searchResultCopy =>
    `${searchResultCopy.length} request${
      searchResultCopy.length !== 1 ? 's' : ''
    } selected`;
  return (
    <RequestTableContainer
      tableColumns={tableColumns}
      title={<TableHeadTitle />}
      linkTo={'/search/access'}
      requests={searchResultCopy}
      handleRequestClick={(e, id) => console.log(`request ${id} clicked`)}
      setFooterButtonText={setFooterButtonText}
      handleFooterButtonClick={requestAssetsClick}
    />
  );
};

export default TableSection;
