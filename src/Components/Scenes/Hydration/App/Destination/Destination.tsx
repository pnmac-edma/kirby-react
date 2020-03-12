import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Typography, IconButton, Tooltip } from '@material-ui/core';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import { useFormikContext } from 'formik';
import {
  InitialStateTypes,
  NodeModel
} from '../../../../../State/Hydration/types';

const useStyles = makeStyles(theme => ({
  typography: {
    textAlign: 'left',
    padding: '8px 16px 16px'
  }
}));

interface DestinationProps {
  id: string;
  removeNodeFromDiagram: (
    node: NodeModel,
    subForm: 'sources' | 'transforms' | 'destinations'
  ) => void;
}

const Destination = (props: DestinationProps) => {
  const { id, removeNodeFromDiagram } = props;
  const { values } = useFormikContext() as { values: InitialStateTypes };
  const selectedNode = useSelector(
    ({ hydration }: any) => hydration.selectedNode
  );
  const { destinations } = values;
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.typography} variant="h4">
        {destinations[id].name}
      </Typography>
      <Tooltip
        onClick={() => removeNodeFromDiagram(selectedNode, 'destinations')}
        title="Remove Tile"
        placement="top"
      >
        <IconButton aria-label="remove-tile">
          <DeleteOutline fontSize="small" />
        </IconButton>
      </Tooltip>
      <p>{destinations[id].email}</p>

      <p>{destinations[id].description}</p>
    </div>
  );
};

export default Destination;
