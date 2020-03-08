import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormikContext } from 'formik';
import DiagramView from '../DiagramView/DiagramView';
import { Toolbar } from '../Toolbar/Toolbar';
import { DestNodeModel, SourceNodeModel, TransNodeModel } from '../Nodes';
import { setSelectedNode } from '../../../../../State/Hydration/actions';
import { initialStateTypes } from '../../../../../State/Hydration/types';
import TransformEditor from '../Transform/TransformEditor';
import {
  generateSourceInitialState,
  generateTransformInitialState
} from '../../../../../State/Hydration/forms';

const JobDesigner = (props: any) => {
  const { app, forceUpdate, selectedNode } = props;
  const { values, setFieldValue } = useFormikContext() as {
    values: initialStateTypes;
    setFieldValue: (field: string, value: any) => void;
  };
  const isEditorOpen = useSelector(
    ({ hydration }: any) => hydration.isEditorOpen
  );
  const dispatch = useDispatch();

  const addNodeToDiagram = (
    type: string,
    x: number,
    y: number,
    name: string = ''
  ): any => {
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
      setFieldValue('sources', formInitialState);
    } else if (type === 'trans') {
      formInitialState = generateTransformInitialState(node.id, values);
      setFieldValue('transforms', formInitialState);
    } else if (type === 'dest') {
      formInitialState = { ...values };
    }

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
    return node;
  };

  return (
    <div className={`Diagram`}>
      {isEditorOpen && selectedNode && selectedNode.id && (
        <TransformEditor id={selectedNode.id} />
      )}
      <DiagramView app={app} addNodeToDiagram={addNodeToDiagram} />
      <Toolbar
        selectedNode={selectedNode}
        addNodeToDiagram={addNodeToDiagram}
      />
    </div>
  );
};

export default JobDesigner;
