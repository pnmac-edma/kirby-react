import React from 'react';
import { useFormikContext } from 'formik';
import { Chip, Tooltip } from '@material-ui/core';
import { PortWidget } from '@projectstorm/react-diagrams';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import {
  InitialStateTypes,
  NodeModel,
  RDBMS,
  API
} from '../../../../../State/Hydration/types';

interface SourceNodeWidgetProps {
  node: NodeModel;
}

const SourceNodeWidget = ({ node }: SourceNodeWidgetProps) => {
  const { name, id, size } = node;
  const { values } = useFormikContext() as { values: InitialStateTypes };
  const { sources } = values;
  const height = size * 0.5;

  const generateTag = (sourceType: string) => {
    if (sourceType === 'RDBMS') {
      return (sources[id] as RDBMS).sourceVersion;
    }
    if (sourceType === 'API') {
      return (sources[id] as API).type;
    }
    return '';
  };

  return (
    <div>
      <div className={`Tile Tile__source`}>
        <div className={`Tile__inner`}>
          <div className={`Tile__title Tile__source-title`}>Source</div>
          <div className="Tile__source-name Tile__name">{name}</div>
          {generateTag(name) !== '' ? (
            <Chip className="Tile__chip" label={generateTag(name)} />
          ) : (
            ''
          )}
          <Tooltip title="There are 5 incomplete fields" placement="top">
            <WarningRoundedIcon className="Tile__statusIcon Tile__statusIcon--warning" />
          </Tooltip>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          top: height / 2 - 8,
          left: size - 8
        }}
      >
        <PortWidget name="right" node={node as any} />
      </div>
    </div>
  );
};

export default SourceNodeWidget;
