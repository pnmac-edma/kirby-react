import React from 'react';
import { useFormikContext } from 'formik';
import { Chip, Tooltip, withStyles } from '@material-ui/core';
import { PortWidget } from '@projectstorm/react-diagrams';

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
}))(Tooltip);

const DestinationNodeWidget = props => {
  const { name, id, size } = props.node;
  const height = size * 0.5;
  const { values } = useFormikContext();
  const { destinations } = values;

  const generateTag = destinationSensitivity => {
    return destinations[id].sensitivity;
  };

  console.log(destinations[id]);

  const destinationSensitivity = generateTag(name);

  return (
    <div>
      <div className={`Tile Tile__destination`}>
        <div className={`Tile__inner`}>
          <div className={`Tile__title Tile__destination-title`}>
            Destination
          </div>
          <LightTooltip title={name} placement="top">
            <div className="Tile__transform-name Tile__name">{name}</div>
          </LightTooltip>
          <Chip className="Tile__chip" label={destinationSensitivity} />
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          zIndex: 10,
          top: height / 2 - 8,
          left: -8
        }}
      >
        <PortWidget name="left" node={props.node} className="Tile__left-port" />
      </div>
    </div>
  );
};

export default DestinationNodeWidget;
