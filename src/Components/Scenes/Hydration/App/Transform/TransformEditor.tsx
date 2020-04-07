import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormikContext } from 'formik';
import Editor from '@monaco-editor/react'; // https://github.com/suren-atoyan/monaco-react, similar to react-monaco-editor
import {
  IconButton,
  makeStyles,
  TextField,
  Tooltip,
  Typography,
  useTheme
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { color } from '@edma/design-tokens';
import {
  setIsEditorOpen,
  handleTitleName
} from '../../../../../State/Hydration/actions';
import { InitialStateTypes } from '../../../../../State/Hydration/types';
import { keyboardShortcuts } from '../../../../../State/Hydration/helpers';

const useStyles = makeStyles(theme => ({
  positioning: {
    paddingBottom: '5rem'
  },
  name: {
    padding: '1rem',
    background: theme.palette.type === 'light' ? color.g50 : color.g900,
    maxWidth: '100%'
  },
  button: {
    position: 'absolute',
    top: '4.3rem',
    right: '0.5rem'
  },
  scriptName: {
    margin: '1rem',
    padding: 0,
    verticalAlign: 'top',
    display: 'block',
    height: '24px',

    '& .MuiInput-root:before, & .MuiInput-root:after': {
      display: 'none'
    },

    '& .MuiInput-input': {
      padding: 0
    }
  },
  scriptNameBtn: {
    transition: 'all .2s ease-in-out',
    verticalAlign: 'top',
    position: 'relative',
    display: 'inline-block',
    top: '-3px',
    margin: '1rem',
    height: '24px',

    '&:hover': {
      background: theme.palette.type === 'light' ? color.y100 : color.y300,
      color: color.black
    },

    '& ~ svg ': {
      position: 'absolute',
      height: '0.8em',
      top: 19
    }
  },
  untitledScriptName: {
    background: theme.palette.type === 'light' ? color.y100 : color.y300,
    color: color.black
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
  const [isScriptNameActive, setIsScriptNameActive] = useState(false);
  const { scriptTitle } = useSelector((state: any) => state.hydration);
  const setChange = (value: string | undefined, name: string) => {
    const newTransformsValue = {
      ...transforms,
      [id]: {
        ...transforms[id],
        [name]: value
      }
    };
    setFieldValue('transforms', newTransformsValue);
  };
  // const [isEditorReady, setIsEditorReady] = useState(false);
  const valueGetter = useRef();

  // function handleEditorDidMount(_valueGetter) {
  //   setIsEditorReady(true);
  //   valueGetter.current = _valueGetter;
  // }

  function handleShowValue() {
    alert(valueGetter.current());
  }
  return (
    <div
      onKeyUp={(e: React.KeyboardEvent) => keyboardShortcuts.codeEditor(e)}
      className={`Diagram__layer Editor ${classes.positioning}`}
    >
      <div className="Editor__heading" />
      <div className={classes.name}>
        {isScriptNameActive ? (
          <TextField
            autoFocus
            onBlur={() => {
              setChange(scriptTitle, 'name');
              return setIsScriptNameActive(!isScriptNameActive);
            }}
            onChange={e => {
              dispatch(handleTitleName(e.target.value));
            }}
            // name={`transforms.${id}.name`}
            className={classes.scriptName}
            // value={scriptTitle}
          />
        ) : (
          <Typography
            variant="body1"
            className={`${classes.scriptNameBtn} ${
              transforms[id].name === 'Untitled'
                ? classes.untitledScriptName
                : ''
            }`}
            onClick={() => setIsScriptNameActive(!isScriptNameActive)}
          >
            {transforms[id].name}
          </Typography>
        )}
      </div>
      <Tooltip title="Close Editor">
        <IconButton
          className={classes.button}
          onClick={() => dispatch(setIsEditorOpen(false))}
        >
          <CloseIcon />
        </IconButton>
      </Tooltip>
      {/* <input type='text' onChange={(e) =>setChange(e.target.value, 'sqlScript')} value={transforms[id].sqlScript} /> */}
      <Editor
        width="800"
        height="90vh"
        language="sql"
        theme={theme.palette.type === 'light' ? 'vs-light' : 'vs-dark'}
        value={transforms[id].sqlScript}
        // onChange={(_, value: string | undefined) => {
        //   console.log('------', _, value)
        //   setChange(value, 'sqlScript');
        // }}
        editorDidMount={handleShowValue}
      />
    </div>
  );
};

export default TransformEditor;
