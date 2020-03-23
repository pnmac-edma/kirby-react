import React from 'react';
import { useSelector } from 'react-redux';
import { Field } from 'formik';
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  TextField,
  Tooltip,
  Select,
  Divider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { NodeModel } from '../../../../../State/Hydration/types';
import mockSourcesMetadata from '../../../../../State/__mockData__/mockSourcesMetadata.json';

interface KirbyProps {
  id: string;
  removeNodeFromDiagram: (
    node: NodeModel,
    subForm: 'sources' | 'transforms' | 'destinations'
  ) => void;
}

const useStyles = makeStyles(theme => ({
  divider: {
    marginTop: theme.spacing(2)
  },
  selectFormControl: {
    display: 'flex'
  },
  formSection: {
    position: 'relative',
    textAlign: 'left',
    padding: '8px 16px 16px'
  },
  formTitle: {
    textDecoration: 'bold',
    marginBottom: '1rem'
  }
}));

const Kirby = (props: KirbyProps) => {
  const { id, removeNodeFromDiagram } = props;
  const selectedNode = useSelector(
    ({ hydration }: any) => hydration.selectedNode
  );
  const { KIRBY } = mockSourcesMetadata; // TODO: replace with real data
  const classes = useStyles();

  return (
    <div>
      <div className={classes.formSection}>
        <h4 className={classes.formTitle}>Kirby</h4>
        <div className={`Tile__delete`}>
          <Tooltip title="Remove Tile" placement="top">
            <IconButton
              onClick={() => removeNodeFromDiagram(selectedNode, 'sources')}
              aria-label="remove-tile"
            >
              <DeleteOutline fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>
        <Field
          name={`sources.${id}.host`}
          className="Input__textfield Kirby__host"
          label="Host"
          as={TextField}
        />
        <Field
          name={`sources.${id}.port`}
          className="Input__textfield Kirby__port"
          label="Port"
          as={TextField}
        />
        <Field
          name={`sources.${id}.folder`}
          className="Input__textfield Kirby__folder"
          label="Folder"
          as={TextField}
        />
      </div>
      <Divider className={classes.divider} />

      <div className={classes.formSection}>
        <Tooltip title="Not Connected" placement="top">
          <FlashOnIcon className="Toolbar__bolt-icon" />
        </Tooltip>
        <h4 className={`Toolbar__form-title ${classes.formTitle}`}>
          Connection
        </h4>
        <FormControl
          className={`Input__select Toolbar__connection-type ${classes.selectFormControl}`}
        >
          <InputLabel id="connection-type">Type</InputLabel>
          <Field
            id="connection-type"
            name={`sources.${id}.connectionType`}
            label="Type"
            type="select"
            as={Select}
          >
            {KIRBY.connectionTypes.map((connectionType, i) => (
              <MenuItem key={`${i}-${connectionType}`} value={connectionType}>
                {connectionType}
              </MenuItem>
            ))}
          </Field>
        </FormControl>
        <Button variant="outlined" color="primary" className="Tile__button">
          Test Connection
        </Button>
      </div>
      <Divider className={classes.divider} />
    </div>
  );
};

export default Kirby;
