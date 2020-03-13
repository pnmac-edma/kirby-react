import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormikContext } from 'formik';
import { Button, IconButton, makeStyles, Tooltip } from '@material-ui/core';
import { color } from '@edma/design-tokens';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import { setIsEditorOpen } from '../../../../../State/Hydration/actions';
import {
  InitialStateTypes,
  NodeModel
} from '../../../../../State/Hydration/types';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative'
  },
  formSection: {
    position: 'relative',
    padding: '8px 16px 16px',
    borderBottom: `1px solid ${
      theme.palette.type === 'light' ? color.g100 : color.g700
    }`
  },
  typography: {
    marginBottom: '1rem'
  },
  button: {
    marginBottom: '1rem'
  }
}));

interface TransformProps {
  id: string;
  removeNodeFromDiagram: (
    node: NodeModel,
    subForm: 'sources' | 'transforms' | 'destinations'
  ) => void;
}

const Transform = (props: TransformProps) => {
  const { id, removeNodeFromDiagram } = props;
  const { values } = useFormikContext() as { values: InitialStateTypes };
  const { transforms } = values;
  const selectedNode = useSelector(
    ({ hydration }: any) => hydration.selectedNode
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div className={classes.formSection}>
      <h4 className={classes.typography}>{transforms[id].name}</h4>
      <div className={`Tile__delete`}>
        <Tooltip
          onClick={() => removeNodeFromDiagram(selectedNode, 'transforms')}
          title="Remove Tile"
          placement="top"
        >
          <IconButton aria-label="remove-tile">
            <DeleteOutline fontSize="small" />
          </IconButton>
        </Tooltip>
      </div>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        onClick={() => dispatch(setIsEditorOpen(true))}
      >
        Edit Script
      </Button>
    </div>
  );
};

export default Transform;
