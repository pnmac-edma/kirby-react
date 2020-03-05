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
import { color } from '@edma/design-tokens/';
import mockSourcesMetadata from '../../../../../State/__mockData__/mockSourcesMetadata.json';

interface RdbmsProps {
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
  },
  tileDelete: {
    '& button span svg path': {
      fill: theme.palette.type === 'light' ? color.black : color.white
    },

    '&:hover > button span svg path': {
      fill: theme.palette.type === 'light' ? color.r600 : color.r300
    }
  }
}));

const Rdbms = (props: RdbmsProps) => {
  const { id } = props;
  const { RDBMS } = mockSourcesMetadata; // TODO: replace with real data
  const classes = useStyles();

  return (
    <div>
      <div className={classes.formSection}>
        <h4 className={classes.formTitle}>RDBMS</h4>
        <div className={`Tile__delete ${classes.tileDelete}`}>
          <Tooltip title="Delete Tile" placement="top">
            <IconButton aria-label="delete-tile">
              <CloseIcon fontSize="small" />
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

      <div className={classes.formSection}>
        <h4 className={classes.formTitle}>Connection</h4>
        <FormControl
          className={`${classes.selectFormControl} Input__select Rdbms__connection-type`}
        >
          <InputLabel id="connection-type">Connection Type</InputLabel>
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
      </div>
      <Divider className={classes.divider} />
    </div>
  );
};

export default Rdbms;
