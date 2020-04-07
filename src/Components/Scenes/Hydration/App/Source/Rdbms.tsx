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

interface RdbmsProps {
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
  }
}));

const Rdbms = (props: RdbmsProps) => {
  const { id, removeNodeFromDiagram } = props;
  const { RDBMS } = mockSourcesMetadata; // TODO: replace with real data
  const selectedNode = useSelector(
    ({ hydration }: any) => hydration.selectedNode
  );
  const classes = useStyles();

  return (
    <div className="Toolbar__container">
      <div className="Toolbar__section">
        <h4 className="Toolbar__form-title">RDBMS</h4>
        <div className={`Toolbar__delete-tile`}>
          <Tooltip
            onClick={() => removeNodeFromDiagram(selectedNode, 'sources')}
            title="Remove Tile"
            placement="top"
          >
            <IconButton aria-label="remove-tile">
              <DeleteOutline fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>
        <FormControl
          className={`Input__select Rdbms__source-version ${classes.selectFormControl}`}
        >
          <InputLabel id="source-version">Source Version</InputLabel>
          <Field
            id="source-version"
            name={`sources.${id}.sourceVersion`}
            label="Source Version"
            type="select"
            as={Select}
          >
            {RDBMS.sourceVersions.map((sourceVersion, i) => (
              <MenuItem key={`${i}-${sourceVersion}`} value={sourceVersion}>
                {sourceVersion}
              </MenuItem>
            ))}
          </Field>
        </FormControl>
        <Field
          name={`sources.${id}.server`}
          className="Input__textfield Rdbms__server"
          label="Server"
          as={TextField}
        />
        <Field
          name={`sources.${id}.schema`}
          className="Input__textfield Rdbms__schema"
          label="Schema"
          as={TextField}
        />
        <Field
          name={`sources.${id}.port`}
          className="Input__textfield Rdbms__port"
          label="Port"
          as={TextField}
        />
      </div>
      <Divider className={classes.divider} />

      <div className="Toolbar__section">
        <Tooltip title="Not Connected" placement="top">
          <FlashOnIcon className="Toolbar__bolt-icon" />
        </Tooltip>
        <h4 className={`Toolbar__form-title`}>Connection</h4>
        <FormControl
          className={`${classes.selectFormControl} Input__select Toolbar__connection-type`}
        >
          <InputLabel id="connection-type">Type</InputLabel>
          <Field
            id="connection-type"
            name={`sources.${id}.connectionType`}
            label="Type"
            type="select"
            as={Select}
          >
            {RDBMS.connectionTypes.map((connectionType, i) => (
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

export default Rdbms;
