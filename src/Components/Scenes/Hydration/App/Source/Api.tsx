import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Field, useFormikContext } from 'formik';
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  TextField,
  Tooltip,
  Select,
  Divider,
  CircularProgress
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import {
  NodeModel,
  InitialStateTypes
} from '../../../../../State/Hydration/types';
import mockSourcesMetadata from '../../../../../State/__mockData__/mockSourcesMetadata.json';

interface ApiProps {
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
  colorForSuccess: {
    color: 'green'
  },
  colorForFail: {
    color: 'red'
  },
  hide: {
    display: 'none'
  }
}));

const Rdbms = (props: ApiProps) => {
  const { id, removeNodeFromDiagram } = props;
  const { API } = mockSourcesMetadata; // TODO: replace with real data
  const selectedNode = useSelector(
    ({ hydration }: any) => hydration.selectedNode
  );
  const classes = useStyles();
  const { values } = useFormikContext() as { values: InitialStateTypes };
  const [isCalling, setIsCalling] = useState(false);
  const [isCallSuccessful, setIsCallSuccessful] = useState(false);
  const [isCallFail, setIsCallFail] = useState(false);
  const sourceTilesTypeConnection = () => {
    setIsCalling(true);
    return setTimeout(function() {
      setIsCalling(false);
      setIsCallFail(false);
      setIsCallSuccessful(true);
    }, 4000);
  };
  return (
    <div className="Toolbar__container">
      <div className="Toolbar__section">
        <h4 className="Toolbar__form-title">API</h4>
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

      <div className="Toolbar__section">
        <Tooltip
          title={
            isCallSuccessful
              ? 'Connected'
              : isCallFail
              ? 'Unable to connect'
              : 'Not Connected'
          }
          placement="top"
        >
          {isCalling ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            <FlashOnIcon
              className={
                isCallSuccessful
                  ? classes.colorForSuccess
                  : isCallFail
                  ? classes.colorForFail
                  : 'Toolbar__bolt-icon'
              }
            />
          )}
        </Tooltip>
        <h4 className={`Toolbar__form-title`}>Connection</h4>
        <FormControl
          className={`Input__select Toolbar__connection-type ${classes.selectFormControl}`}
          disabled={isCalling}
        >
          <InputLabel id="connection-type">Type</InputLabel>
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
        <Button
          variant="outlined"
          color="primary"
          className={isCallSuccessful ? classes.hide : 'Tile__button'}
          disabled={
            !Object.values(values.sources)[0].connectionType || isCalling
          }
          onClick={sourceTilesTypeConnection}
        >
          Test Connection
        </Button>
      </div>
      <Divider className={classes.divider} />
    </div>
  );
};

export default Rdbms;
