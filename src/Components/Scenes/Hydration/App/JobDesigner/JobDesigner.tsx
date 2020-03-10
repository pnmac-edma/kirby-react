import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormikContext } from 'formik';
import DiagramView from '../DiagramView/DiagramView';
import { Toolbar } from '../Toolbar/Toolbar';
import TransformEditor from '../Transform/TransformEditor';
import { setSelectedNode } from '../../../../../State/Hydration/actions';
import { setFormInitialState } from '../../../../../State/Hydration/forms';
import {
  DestinationNodeModel,
  SourceNodeModel,
  TransformNodeModel
} from '../Nodes';
import {
  AppEngine,
  InitialStateTypes,
  NodeModel
} from '../../../../../State/Hydration/types';

interface JobDesignerProps {
  app: AppEngine;
  forceUpdate: React.DispatchWithoutAction;
  selectedNode: NodeModel;
}

const JobDesigner = (props: JobDesignerProps) => {
  const { app, forceUpdate, selectedNode } = props;
  const { values, setFieldValue } = useFormikContext() as {
    values: InitialStateTypes;
    setFieldValue: (field: string, value: any) => void;
  };

  const isEditorOpen = useSelector(
    ({ hydration }: any) => hydration.isEditorOpen
  );
  const dispatch = useDispatch();

  // this function handles node being added to diagram:
  // 1. sets up a node model dependent on the type
  // 2. sets up the proper form initial states in formik dependent on the type
  // 3. runs a few app internal functions and adds listeners
  // 4. updates component and returns node
  const addNodeToDiagram = (
    nodeTitle: string,
    position: { x: number; y: number },
    type: string,
    sqlScript = ''
  ): NodeModel => {
    let node: any;
    if (type === 'source') node = new SourceNodeModel(nodeTitle);
    else if (type === 'transform') node = new TransformNodeModel();
    else if (type === 'destination') node = new DestinationNodeModel();
    node.x = position.x;
    node.y = position.y;
    node.name = nodeTitle;

    setFormInitialState(
      type,
      node.id,
      nodeTitle,
      values,
      setFieldValue,
      sqlScript
    );

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
    <div className="Diagram">
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
