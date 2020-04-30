import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableWrapper from '../../../Presentational/Table/TableWrapper';
import {
  handleModalToggle,
  setToggleAssetCheckbox,
  setToggleAssetAllCheckbox
} from '../../../../State/RequestAsset/actions';

const RequestAssetTable = () => {
  const { searchResult, selected } = useSelector(
    ({ searchResult }: any) => searchResult
  );
  const selectedAssets = useSelector(
    ({ requestAssets }: any) => requestAssets.selectedAssets
  );
  const dispatch = useDispatch();

  const columns = [
    { name: 'Name', property: 'databasename' },
    { name: 'Date Created', property: 'createddate' }
  ];

  const titleText = 'Assets in this Request';

  const footerButtonText = `Remove ${selectedAssets.length} selected`;

  const selectedResults = searchResult.results.filter(({ Id }: any) =>
    selected.includes(Id)
  );

  return (
    <TableWrapper
      setTitleText={() => titleText}
      selected={selectedAssets}
      columns={columns}
      data={selectedResults}
      setToggleCheckbox={(selectedAssets: Array<number>, id: number) =>
        dispatch(setToggleAssetCheckbox(selectedAssets, id))
      }
      setToggleAllCheckbox={(
        selectedAssets: Array<number>,
        selectedResults: Array<number>
      ) => dispatch(setToggleAssetAllCheckbox(selectedAssets, selectedResults))}
      footerButtonText={footerButtonText}
      setFirstColLink={(id: number) => console.log(`request ${id} clicked`)}
      setFooterButtonClick={() => dispatch(handleModalToggle())}
    />
  );
};

export default RequestAssetTable;
