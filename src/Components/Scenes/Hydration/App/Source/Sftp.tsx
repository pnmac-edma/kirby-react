import React from 'react';
import { Field } from 'formik';
import {
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
import CloseIcon from '@material-ui/icons/Close';
import mockSourcesMetadata from '../../../../../State/__mockData__/mockSourcesMetadata.json';

interface SftpProps {
  id: string;
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

const Sftp = (props: SftpProps) => {
  const { id } = props;
  const { SFTP } = mockSourcesMetadata; // TODO: replace with real data
  const classes = useStyles();

  return (
    <div>
      <div className={classes.formSection}>
        <h4 className={classes.formTitle}>SFTP</h4>
        <div className={`Tile__delete`}>
          <Tooltip title="Delete Tile" placement="top">
            <IconButton aria-label="delete-tile">
              <CloseIcon fontSize="small" />
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

      <div className={classes.formSection}>
        <h4 className={classes.formTitle}>Connection</h4>
        <FormControl className={`Input__select ${classes.selectFormControl}`}>
          <InputLabel id="connection-type">Connection Type</InputLabel>
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
      </div>
      <Divider className={classes.divider} />
    </div>
  );
};

export default Sftp;
