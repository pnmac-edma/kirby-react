import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, IconButton, Tooltip } from '@material-ui/core';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import { color } from '@edma/design-tokens';
import { useFormikContext } from 'formik';
import {
  InitialStateTypes,
  NodeModel
} from '../../../../../State/Hydration/types';

const useStyles = makeStyles(theme => ({
  tileTitle: {
    textDecoration: 'bold',
    marginBottom: '1rem'
  },
  tileSection: {
    position: 'relative',
    textAlign: 'left',
    padding: '8px 16px 16px',
    borderBottom: `1px solid ${
      theme.palette.type === 'light' ? color.g100 : color.g700
    }`
  },
  tileDescription: {
    color: theme.palette.type === 'light' ? color.g600 : color.g400
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
    <div className={classes.tileSection}>
      <h4 className={classes.tileTitle}>{destinations[id].name}</h4>
      <div className={`Tile__delete`}>
        <Tooltip
          onClick={() => removeNodeFromDiagram(selectedNode, 'destinations')}
          title="Remove Tile"
          placement="top"
        >
          <IconButton aria-label="remove-tile">
            <DeleteOutline fontSize="small" />
          </IconButton>
        </Tooltip>
      </div>
      <p className={classes.tileDescription}>{destinations[id].email}</p>
      <p className={classes.tileDescription}>{destinations[id].description}</p>
    </div>
  );
};

export default Destination;
