import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableWrapper from '../../../Presentational/Table/TableWrapper';
import {
  handleModalToggle,
  setToggleAssetCheckbox,
  setToggleAssetAllCheckbox
} from '../../../../State/RequestAsset/actions';

const TableSection = () => {
  const selected = useSelector(
    ({ searchResult }: any) => searchResult.selected
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

  return (
    <TableWrapper
      setTitleText={() => titleText}
      selected={selectedAssets}
      columns={columns}
      data={selected}
      setToggleCheckbox={(selected: Array<number>, id: number) =>
        dispatch(setToggleAssetCheckbox(selected, id))
      }
      setToggleAllCheckbox={(selected: Array<number>, data: Array<number>) =>
        setToggleAssetAllCheckbox(selected, data)
      }
      footerButtonText={footerButtonText}
      setFirstColLink={(id: number) => console.log(`request ${id} clicked`)}
      setFooterButtonClick={() => dispatch(handleModalToggle())}
    />
  );
};

export default TableSection;
