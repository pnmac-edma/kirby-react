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

interface ApiProps {
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
    marginBottom: 0
  }
}));

const Rdbms = (props: ApiProps) => {
  const { id } = props;
  const { API } = mockSourcesMetadata; // TODO: replace with real data
  const classes = useStyles();

  return (
    <div>
      <div className={classes.formSection}>
        <h4 className={classes.formTitle}>RDBMS</h4>
        <FormControl className={classes.selectFormControl}>
          <InputLabel id="type">Type</InputLabel>
          <Field
            className={`Toolbar__type`}
            id="type"
            name={`sources.${id}.type`}
            label="Type"
            type="select"
            as={Select}
          >
            {API.types.map((type, i) => (
              <MenuItem key={`${i}-${type}`} value={type}>
                {type}
              </MenuItem>
            ))}
          </Field>
        </FormControl>
        <FormControl className={classes.selectFormControl}>
          <InputLabel id="httpMethod">HTTP Method</InputLabel>
          <Field
            className={`Toolbar__httpMethod`}
            id="httpMethod"
            name={`sources.${id}.httpMethod`}
            label="HTTP Method"
            type="select"
            as={Select}
          >
            {API.httpMethods.map((httpMethod, i) => (
              <MenuItem key={`${i}-${httpMethod}`} value={httpMethod}>
                {httpMethod}
              </MenuItem>
            ))}
          </Field>
        </FormControl>
        <Field
          name={`sources.${id}.url`}
          className="Toolbar__url"
          label="URL"
          as={TextField}
        />
      </div>
      <Divider className={classes.divider} />

      <div className={classes.formSection}>
        <h4 className={classes.formTitle}>Connection</h4>
        <FormControl className={classes.selectFormControl}>
          <InputLabel id="connection-type">Connection Type</InputLabel>
          <Field
            className={`Toolbar__connectionType`}
            id="connection-type"
            name={`sources.${id}.connectionType`}
            label="Type"
            type="select"
            as={Select}
          >
            {API.connectionTypes.map((connectionType, i) => (
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

export default Rdbms;
