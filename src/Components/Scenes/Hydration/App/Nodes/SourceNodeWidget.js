import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import color from '@edma/design-tokens/js/color';
import { PortWidget } from '@projectstorm/react-diagrams';

const tileStyles = makeStyles(theme => ({
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
    color: theme.palette.type === 'light' ? color.c600 : color.c400
  }
}));

const SourceNodeWidget = props => {
  const { name, size } = props.node;
  const height = size * 0.5;
  const classes = tileStyles();

  return (
    <div>
      <div className={`${classes.tile} Tile Tile__source`}>
        <div className={`${classes.tileInner} Tile__inner`}>
          <div className={`${classes.tileTitle} Tile__source-title`}>
            Source
          </div>
          <div>{name}</div>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          zIndex: 10,
          top: height / 2 - 8,
          left: size - 8
        }}
      >
        <PortWidget name="right" node={props.node} />
      </div>
    </div>
  );
};

export default SourceNodeWidget;