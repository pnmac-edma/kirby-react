import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormikContext } from 'formik';
import { ControlledEditor } from '@monaco-editor/react'; // https://github.com/suren-atoyan/monaco-react, similar to react-monaco-editor
import { makeStyles } from '@material-ui/core';
import { setIsEditorOpen } from '../../../../../State/Hydration/actions';
import { InitialStateTypes } from '../../../../../State/Hydration/types';

const useStyles = makeStyles(theme => ({
  positioning: {
    paddingTop: '5rem',
    paddingBottom: '5rem'
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
    <div className={`Diagram__layer ${classes.positioning}`}>
      <button type="button" onClick={() => dispatch(setIsEditorOpen(false))}>
        Close
      </button>
      <ControlledEditor
        width="800"
        height="90vh"
        language="sql"
        theme="vs-light"
        value={transforms[id].sqlScript}
        onChange={(_, value: string | undefined) => setChange(value)}
      />
    </div>
  );
};

export default TransformEditor;
