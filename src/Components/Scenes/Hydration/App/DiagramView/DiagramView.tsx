import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormikContext } from 'formik';
import { useDropzone } from 'react-dropzone';
import { DiagramWidget } from '@projectstorm/react-diagrams';
import ArrowHead from '../Links/ArrowHead';
import {
  setSelectedNode,
  setIsEditorOpen
} from '../../../../../State/Hydration/actions';
import {
  AddNodeToDiagram,
  InitialStateTypes,
  NodeModel
} from '../../../../../State/Hydration/types';
import { keyboardShortcuts } from '../../../../../State/Hydration/helpers';

interface DiagramViewProps {
  app: any;
  addNodeToDiagram: AddNodeToDiagram;
  removeNodeFromDiagram: (
    node: NodeModel,
    subForm: 'sources' | 'transforms' | 'destinations'
  ) => void;
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
  const { addNodeToDiagram, app, removeNodeFromDiagram } = props;
  const { values, setFieldValue } = useFormikContext() as {
    values: InitialStateTypes;
    setFieldValue: (field: string, value: any) => void;
  };
  const { transforms } = values;
  const selectedNode = useSelector(
    ({ hydration }: any) => hydration.selectedNode
  );
  const dispatch = useDispatch();

  // this function handles node elements drop
  const onDropNode = (event: any) => {
    if (event.dataTransfer.types[0] === 'storm-diagram-node') {
      const data = JSON.parse(event.dataTransfer.getData('storm-diagram-node'));
      const points = app.getDiagramEngine().getRelativeMousePoint(event);
      addNodeToDiagram(data.name, { x: points.x, y: points.y }, data.type, {
        sqlScript: data.sqlScript,
        email: data.email,
        description: data.description,
        schedule: data.schedule
      });
    }
  };

  // this function handles file drop with the following steps:
  // 1. converts the file into a string that holds the code
  // 2. adds node to diagram and makes sure node is selected
  // 3. sets the form values in formik
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
    },
    [addNodeToDiagram, setFieldValue, transforms, dispatch]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    noClick: true
  });

  return (
    <div
      className={`Diagram__layer ${
        isDragActive ? 'Diagram__layer--is-dragging' : ''
      }`}
      onDrop={event => onDropNode(event)}
      onDragOver={event => event.preventDefault()}
      onKeyUp={event =>
        keyboardShortcuts.diagram(event, removeNodeFromDiagram, selectedNode)
      }
    >
      <div {...getRootProps()} className={`Diagram__canvas`}>
        <input {...getInputProps()} />
        <DiagramWidget
          className={`Diagram__canvas`}
          diagramEngine={app.getDiagramEngine()}
        />
        <ArrowHead />
      </div>
    </div>
  );
};

export default DiagramView;
