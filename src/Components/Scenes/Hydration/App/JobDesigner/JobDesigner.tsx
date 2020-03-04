import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormikContext } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import color from '@edma/design-tokens/js/color';
import { DiagramWidget } from '@projectstorm/react-diagrams';
import { Toolbar } from '../Toolbar/Toolbar';
import { DestNodeModel, SourceNodeModel, TransNodeModel } from '../Nodes';
import { setSelectedNode } from '../../../../../State/Hydration/actions';
import {
  rdbmsInitialState,
  sftpInitialState,
  apiInitialState
} from '../../../../../State/Hydration/forms';

const generateSourceInitialState = (
  id: string,
  sourceType: string,
  formValues: any
) => {
  let sourceForm: any;
  if (formValues.sources[id]) {
    sourceForm = formValues.sources[id];
  } else if (sourceType === 'RDBMS') {
    sourceForm = rdbmsInitialState;
  } else if (sourceType === 'SFTP') {
    sourceForm = sftpInitialState;
  } else if (sourceType === 'API') {
    sourceForm = apiInitialState;
  }
  sourceForm.sourceType = sourceType;

  return {
    ...formValues.sources,
    [id]: sourceForm
  };
};

const diagramStyles = makeStyles(theme => ({
  diagramCanvas: {
    background: theme.palette.type === 'light' ? color.g50 : color.g900
  }
}));

const JobDesigner = (props: any) => {
  const { app, forceUpdate, selectedNode } = props;
  const { values, setFieldValue } = useFormikContext() as any;
  const classes = diagramStyles();
  const dispatch = useDispatch();

  const addNodeToDiagram = (
    type: string,
    x: number,
    y: number,
    name: string = ''
  ) => {
    let node: any;
    if (type === 'source') node = new SourceNodeModel(name);
    else if (type === 'trans') node = new TransNodeModel();
    else if (type === 'dest') node = new DestNodeModel();
    node.x = x;
    node.y = y;
    node.name = name;

    let formInitialState = {};
    if (type === 'source') {
      formInitialState = generateSourceInitialState(node.id, name, values);
    } else if (type === 'trans') {
      formInitialState = { ...values };
    } else if (type === 'dest') {
      formInitialState = { ...values };
    }
    setFieldValue('sources', formInitialState);

    app
      .getDiagramEngine()
      .getDiagramModel()
      .addNode(node);
    node.addListener({
      selectionChanged: (event: React.FormEvent<HTMLFormElement>) =>
        dispatch(setSelectedNode(event)),
      entityRemoved: (event: React.FormEvent<HTMLFormElement>) =>
        dispatch(setSelectedNode(null))
    });
    forceUpdate();
  };

  return (
    <div className={`Diagram`}>
      <div
        className="Diagram__layer"
        onDrop={event => {
          const data = JSON.parse(
            event.dataTransfer.getData('storm-diagram-node')
          );
          const points = app.getDiagramEngine().getRelativeMousePoint(event);
          addNodeToDiagram(data.type, points.x, points.y, data.name);
        }}
        onDragOver={event => event.preventDefault()}
      >
        <DiagramWidget
          className={`${classes.diagramCanvas} Diagram__canvas`}
          diagramEngine={app.getDiagramEngine()}
        />
      </div>
      <Toolbar
        selectedNode={selectedNode}
        addNodeToDiagram={addNodeToDiagram}
      />
    </div>
  );
};

export default JobDesigner;
