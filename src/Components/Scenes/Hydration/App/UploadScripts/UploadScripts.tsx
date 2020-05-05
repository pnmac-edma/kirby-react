import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useFormikContext } from 'formik';
import { useDropzone } from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import {
  setSelectedNode,
  setIsEditorOpen,
  setIsUploadModalOpen
} from '../../../../../State/Hydration/actions';
import {
  AddNodeToDiagram,
  InitialStateTypes
} from '../../../../../State/Hydration/types';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '150px',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5px',
    boxShadow:
      '0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)'
  },
  insideContainer: {
    border: '3px dashed green',
    padding: '10px',
    width: '90%',
    height: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const UploadScripts = ({ addNodeToDiagram }: UploadScriptsProps) => {
  const { values, setFieldValue } = useFormikContext() as {
    values: InitialStateTypes;
    setFieldValue: (field: string, value: any) => void;
  };
  const { transforms } = values;
  const dispatch = useDispatch();

  // NOTE: this function is a duplicate of the function inside DiagramView
  //       either move this function to outside file to keep DRY or adjust
  //       based on what will be required of this function
  const onDrop = useCallback(
    async (files: Array<File>) => {
      const convertFileToCodeString = async (file: File) => {
        const toArrayBuffer = (file: any) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
          });

        const arrayBuffer: any = await toArrayBuffer(file);
        const uint8View = new Uint8Array(arrayBuffer);
        return uint8View.reduce((str, v) => str + String.fromCharCode(v), '');
      };
      const codeString = await convertFileToCodeString(files[0]);

      const node = addNodeToDiagram(
        'Untitled',
        { x: 400, y: 400 },
        'transform'
      );
      node.selected = true;
      dispatch(setSelectedNode(null, node));
      dispatch(setIsEditorOpen(true));

      const newTransformsValue = {
        ...transforms,
        [node.id]: {
          ...transforms[node.id],
          sqlScript: codeString
        }
      };
      setFieldValue('transforms', newTransformsValue);
      dispatch(setIsUploadModalOpen(false));
    },
    [addNodeToDiagram, setFieldValue, transforms, dispatch]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.sql',
    multiple: false
  });

  const classes = useStyles();
  return (
    <div className={classes.container} {...getRootProps()}>
      <input {...getInputProps()} />
      <div className={classes.insideContainer}>
        <p>Drop your Script File here, or click here to browse files.</p>
      </div>
    </div>
  );
};

export default UploadScripts;

interface UploadScriptsProps {
  addNodeToDiagram: AddNodeToDiagram;
}
