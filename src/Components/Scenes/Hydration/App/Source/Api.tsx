import React from 'react';
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
    position: 'relative',
    textAlign: 'left',
    padding: '8px 16px 16px'
  },
  formTitle: {
    textDecoration: 'bold',
    marginBottom: '1rem'
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
        <div className={`Tile__delete`}>
          <Tooltip title="Remove Tile" placement="top">
            <IconButton aria-label="remove-tile">
              <DeleteOutline fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>
        <FormControl
          className={`Input__select Api__type ${classes.selectFormControl}`}
        >
          <InputLabel id="type">Type</InputLabel>
          <Field
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
        <FormControl
          className={`Input__select Api__http-method ${classes.selectFormControl}`}
        >
          <InputLabel id="httpMethod">HTTP Method</InputLabel>
          <Field
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
          className="Input__textfield Api__url"
          label="URL"
          as={TextField}
        />
      </div>
      <Divider className={classes.divider} />

      <div className={classes.formSection}>
        <h4 className={classes.formTitle}>Connection</h4>
        <FormControl
          className={`Input__select Toolbar__connection-type ${classes.selectFormControl}`}
        >
          <InputLabel id="connection-type">Connection Type</InputLabel>
          <Field
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
        <Button variant="outlined" color="primary">
          Test Connection
        </Button>
      </div>
      <Divider className={classes.divider} />
    </div>
  );
};

export default Rdbms;
