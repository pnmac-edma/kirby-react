import React from 'react';
import { Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { PortWidget } from '@projectstorm/react-diagrams';

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
}))(Tooltip);

const TransformNodeWidget = props => {
  const { name, size } = props.node;
  const height = size * 0.5;

  return (
    <div>
      <div className={`Tile Tile__transform`}>
        <div className={`Tile__inner`}>
          <div className={`Tile__title Tile__transform-title`}>Transform</div>
          <LightTooltip title={name} placement="top">
            <div className="Tile__transform-name Tile__name">{name}</div>
          </LightTooltip>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          top: height / 2 - 8,
          left: -8
        }}
      >
        <PortWidget name="left" node={props.node} className="Tile__left-port" />
      </div>
      <div
        style={{
          position: 'absolute',
          top: height / 2 - 8,
          left: size - 8
        }}
      >
        <PortWidget name="right" node={props.node} />
      </div>
    </div>
  );
};

export default TransformNodeWidget;
