import React from 'react';
import { useFormikContext } from 'formik';
import { makeStyles, Chip } from '@material-ui/core';
import color from '@edma/design-tokens/js/color';
import { PortWidget } from '@projectstorm/react-diagrams';
import {
  InitialStateTypes,
  NodeModel,
  RDBMS,
  API
} from '../../../../../State/Hydration/types';

const useStyles = makeStyles(theme => ({
  tile: {
    borderColor: theme.palette.type === 'light' ? color.g600 : color.g500,
    backgroundColor: theme.palette.type === 'light' ? color.g600 : color.g500,

    '&:hover': {
      backgroundColor:
        theme.palette.type === 'light' ? color.black : color.white,
      borderColor: theme.palette.type === 'light' ? color.black : color.white
    }
  },
  tileInner: {
    backgroundColor: theme.palette.type === 'light' ? color.white : color.g800
  },
  tileTitle: {
    color: theme.palette.type === 'light' ? color.b500 : color.b200
  }
}));

interface SourceNodeWidgetProps {
  node: NodeModel;
}

const SourceNodeWidget = ({ node }: SourceNodeWidgetProps) => {
  const { name, id, size } = node;
  const { values } = useFormikContext() as { values: InitialStateTypes };
  const { sources } = values;
  const height = size * 0.5;
  const classes = useStyles();

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
      <div className={`${classes.tile} Tile Tile__source`}>
        <div className={`${classes.tileInner} Tile__inner`}>
          <div className={`${classes.tileTitle} Tile__source-title`}>
            Source
          </div>
          <div className="Tile__source-name Tile__name">{name}</div>
          {generateTag(name) !== '' ? (
            <Chip className="Tile__chip" label={generateTag(name)} />
          ) : (
            ''
          )}
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
