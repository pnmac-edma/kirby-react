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

interface SftpProps {
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

const Sftp = (props: SftpProps) => {
  const { id, removeNodeFromDiagram } = props;
  const selectedNode = useSelector(
    ({ hydration }: any) => hydration.selectedNode
  );
  const { SFTP } = mockSourcesMetadata; // TODO: replace with real data
  const classes = useStyles();

  return (
    <div className="Toolbar__container">
      <div className="Toolbar__section">
        <h4 className="Toolbar__form-title">SFTP</h4>
        <div className={`Toolbar__delete-tile`}>
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
          className="Input__textfield Sftp__host"
          label="Host"
          as={TextField}
        />
        <Field
          name={`sources.${id}.port`}
          className="Input__textfield Sftp__port"
          label="Port"
          as={TextField}
        />
        <Field
          name={`sources.${id}.folder`}
          className="Input__textfield Sftp__folder"
          label="Folder"
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
            {SFTP.connectionTypes.map((connectionType, i) => (
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

export default Sftp;
