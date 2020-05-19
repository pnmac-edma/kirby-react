import React from 'react';
import { useFormikContext } from 'formik';
import { Chip, Tooltip } from '@material-ui/core';
import { PortWidget } from '@projectstorm/react-diagrams';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';

const SourceNodeWidget = ({ node }) => {
  const { name, id, size } = node;
  const { values } = useFormikContext();
  const { sources } = values;
  const height = size * 0.5;

  const generateTag = sourceType => {
    if (sourceType === 'RDBMS') {
      return sources[id].sourceVersion;
    }
    if (sourceType === 'API') {
      return sources[id].type;
    }
    return '';
  };

  const sourceType = generateTag(name);

  return (
    <div>
      <div className={`Tile Tile__source`}>
        <div className={`Tile__inner`}>
          <div className={`Tile__title Tile__source-title`}>Source</div>
          <div className="Tile__source-name Tile__name">{name}</div>
          {sourceType !== '' ? (
            <Chip className="Tile__chip" label={sourceType} />
          ) : (
            ''
          )}
          {
            // TODO: Replace the hard coded "5" with an actual count
            // of incomplete fields for the given tile.
          }
          <Tooltip title="There are 5 incomplete fields" placement="top">
            <WarningRoundedIcon className="Tile__statusIcon Tile__statusIcon--warning" />
          </Tooltip>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          top: height / 2 - 8,
          left: size - 4
        }}
      >
        <PortWidget name="right" node={node} />
      </div>
    </div>
  );
};

export default SourceNodeWidget;
