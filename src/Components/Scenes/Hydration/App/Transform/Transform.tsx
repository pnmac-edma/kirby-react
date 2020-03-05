import React from 'react';
import { useFormikContext } from 'formik';
import { ControlledEditor } from '@monaco-editor/react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  positioning: {
    paddingTop: '5rem',
    paddingBottom: '5rem'
  }
}));

interface TransformProps {
  id: string;
}

const Transform = (props: TransformProps) => {
  const { id } = props;
  const classes = useStyles();
  const { values } = useFormikContext() as any;
  const { transforms } = values;

  return (
    <div className={`Diagram__layer ${classes.positioning}`}>
      <ControlledEditor
        width="800"
        height="90vh"
        language="sql"
        theme="vs-light"
        value={transforms[id].value}
        onChange={() => console.log('heyoo')}
        // options={options}
        // editorDidMount={() => editorDidMount()}
      />
    </div>
  );
};

export default Transform;
