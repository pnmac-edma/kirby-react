import React from 'react';
import { Field } from 'formik';
import {
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Select,
  Divider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
