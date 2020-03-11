import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormikContext } from 'formik';
import { ControlledEditor } from '@monaco-editor/react'; // https://github.com/suren-atoyan/monaco-react, similar to react-monaco-editor
import {
  IconButton,
  makeStyles,
  Tooltip,
  Typography,
  useTheme
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { setIsEditorOpen } from '../../../../../State/Hydration/actions';
import { InitialStateTypes } from '../../../../../State/Hydration/types';

const useStyles = makeStyles(theme => ({
  positioning: {
    paddingBottom: '5rem'
  },
  name: {
    padding: '1rem'
  },
  button: {
    position: 'absolute',
    top: '4.3rem',
    right: '0.5rem'
  }
}));

interface TransformProps {
  id: string;
}

const TransformEditor = (props: TransformProps) => {
  const { id } = props;
  const { values, setFieldValue } = useFormikContext() as {
    values: InitialStateTypes;
    setFieldValue: (field: string, value: any) => void;
  };
  const { transforms } = values;
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();

  const setChange = (value: string | undefined) => {
    const newTransformsValue = {
      ...transforms,
      [id]: {
        ...transforms[id],
        sqlScript: value
      }
    };
    setFieldValue('transforms', newTransformsValue);
  };

  return (
    <div className={`Diagram__layer Editor ${classes.positioning}`}>
      <div className="Editor__heading" />
      <Typography variant="body1" className={classes.name}>
        {transforms[id].name}
      </Typography>
      <Tooltip title="Close Editor">
        <IconButton
          className={classes.button}
          onClick={() => dispatch(setIsEditorOpen(false))}
        >
          <CloseIcon />
        </IconButton>
      </Tooltip>
      <ControlledEditor
        width="800"
        height="90vh"
        language="sql"
        theme={theme.palette.type === 'light' ? 'vs-light' : 'vs-dark'}
        value={transforms[id].sqlScript}
        onChange={(_, value: string | undefined) => setChange(value)}
      />
    </div>
  );
};

export default TransformEditor;
