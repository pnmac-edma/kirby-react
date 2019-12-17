import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import color from '@edma/design-tokens/js/color';

const toolbarStyles = makeStyles(theme => ({
  typography: {
    textAlign: 'center'
  }
}));

const ToolbarItemWidget = props => {
  const { model, color, name, onClick } = props;

  return (
    <div
      style={{ borderColor: color }}
      draggable={true}
      onDragStart={event => {
        event.dataTransfer.setData('storm-diagram-node', JSON.stringify(model));
      }}
      className="Toolbar__nodetype"
      onClick={onClick}
    >
      {name}
    </div>
  );
};

const ToolbarWidget = props => {
  const classes = toolbarStyles();
  const { children } = props;
  return (
    <div className="Toolbar">
      <Typography variant="h5" className={classes.typography}>
        Pick A Node, Any Node
      </Typography>
      {children}
    </div>
  );
};

const options = [
  {
    value: 'option_1',
    label: 'Option 1'
  },
  {
    value: 'option_2',
    label: 'Option 2'
  },
  {
    value: 'option_3',
    label: 'Option 3'
  },
  {
    value: 'option_4',
    label: 'Option 4'
  }
];

export const Toolbar = props => {
  const classes = toolbarStyles();
  const { selectedNode, addNodeToDiagram } = props;
  const [value, setValue] = React.useState('option_1');

  const handleSelectChange = e => {
    setValue(e.target.value);
  };

  if (selectedNode !== null) {
    const toolbarType = {
      source: 'Source',
      trans: 'Transformation',
      dest: 'Destination'
    }[selectedNode.type];
    return (
      <div className="Toolbar">
        <Typography className={classes.typography} variant="h5">
          Toolbar for {toolbarType}
          <br /> Node ID:
          <br /> {selectedNode.id}
        </Typography>
      </div>
    );
  } else {
    return (
      <ToolbarWidget>
        <ToolbarItemWidget
          model={{ type: 'source' }}
          name="Source"
          color={color['c400']}
          onClick={() => addNodeToDiagram('source', 400, 400)}
        />
        <ToolbarItemWidget
          model={{ type: 'trans' }}
          name="Transformation"
          color={color['v400']}
          onClick={() => addNodeToDiagram('trans', 400, 400)}
        />
        <ToolbarItemWidget
          model={{ type: 'dest' }}
          name="Destination"
          color={color['r300']}
          onClick={() => addNodeToDiagram('dest', 400, 400)}
        />
        <div>
          <TextField
            id="example"
            label="Example TextField"
            className="Toolbar__textfield"
          />
        </div>
        <div>
          <TextField
            select
            className="Toolbar__select"
            id="select-example"
            label="Example Select"
            value={value}
            onChange={handleSelectChange}
          >
            {options.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </ToolbarWidget>
    );
  }
};
