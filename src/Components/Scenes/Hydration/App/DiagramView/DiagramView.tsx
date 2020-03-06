import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useFormikContext } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { useDropzone } from 'react-dropzone';
import color from '@edma/design-tokens/js/color';
import { DiagramWidget } from '@projectstorm/react-diagrams';
import {
  setSelectedNode,
  setIsEditorOpen
} from '../../../../../State/Hydration/actions';
import { initialStateTypes } from '../../../../../State/Hydration/types';

const useStyles = makeStyles(theme => ({
  diagramCanvas: {
    background: theme.palette.type === 'light' ? color.g50 : color.g900
  }
}));

interface DiagramViewProps {
  app: any;
  addNodeToDiagram: (type: string, x: number, y: number, name: string) => any;
}

/**
 * This component provides 2 drop event listeners/handlers:
 * 1. The outer layer provides a custom event listener/handler that handles
 * Node HTML element drag'n'drop. This parent element always triggers due to
 * event propagation but a conditional checks if it is an element to run
 * its course
 * 2. The inner layer is provided by react-dropzone that has a listener/handler
 * that runs when a file is dropped
 */
const DiagramView = (props: DiagramViewProps) => {
  const { addNodeToDiagram, app } = props;
  const { values, setFieldValue } = useFormikContext() as {
    values: initialStateTypes;
    setFieldValue: (field: string, value: any) => void;
  };
  const { transforms } = values;
  const dispatch = useDispatch();
  const classes = useStyles();

  const onDropNode = (event: any) => {
    if (event.dataTransfer.types[0] === 'storm-diagram-node') {
      const data = JSON.parse(event.dataTransfer.getData('storm-diagram-node'));
      const points = app.getDiagramEngine().getRelativeMousePoint(event);
      addNodeToDiagram(data.type, points.x, points.y, data.name);
    }
  };

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

      const node = addNodeToDiagram('trans', 400, 400, 'Untitled');
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
    },
    [addNodeToDiagram, setFieldValue, transforms, dispatch]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    noClick: true
  });

  // TODO: use isDragActive to provide highlighting functionality when dragging an item over
  return (
    <div
      className="Diagram__layer"
      onDrop={event => onDropNode(event)}
      onDragOver={event => event.preventDefault()}
    >
      <div
        {...getRootProps()}
        className={`${classes.diagramCanvas} Diagram__canvas`}
      >
        <input {...getInputProps()} />
        <DiagramWidget
          className={`${classes.diagramCanvas} Diagram__canvas`}
          diagramEngine={app.getDiagramEngine()}
        />
      </div>
    </div>
  );
};

export default DiagramView;
