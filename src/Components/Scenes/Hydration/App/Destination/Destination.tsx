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
    <div className="Toolbar__container Toolbar__section">
      <h4 className="Toolbar__form-title">{destinations[id].name}</h4>
      <div className={`Toolbar__delete-tile`}>
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
