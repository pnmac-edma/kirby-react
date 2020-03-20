import React, { useState } from 'react';
import { Dialog } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useFormikContext } from 'formik';
import DiagramView from '../DiagramView/DiagramView';
import Toolbar from '../Toolbar/Toolbar';
import TransformEditor from '../Transform/TransformEditor';
import {
  setSelectedNode,
  setRemoveSelectedNode
} from '../../../../../State/Hydration/actions';
import ScheduleJob from '../ScheduleJob/ScheduleJob';
import { setFormInitialState } from '../../../../../State/Hydration/forms';
import {
  DestinationNodeModel,
  SourceNodeModel,
  TransformNodeModel
} from '../Nodes';
import {
  AppEngine,
  InitialStateTypes,
  OptionalParamsNode,
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
  const [isScheduleJobOpen, setIsScheduleJobOpen] = useState(false);
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
    optionalParams: OptionalParamsNode = {}
  ): NodeModel => {
    let node: any;
    if (type === 'source') node = new SourceNodeModel(nodeTitle);
    else if (type === 'transform') node = new TransformNodeModel();
    else if (type === 'destination') node = new DestinationNodeModel();
    node.x = position.x;
    node.y = position.y;
    node.name = nodeTitle;

    // this sets the default values for optional params to prevent
    // erroring out when passed into setFormInitialState
    const defaultKeys = ['sqlScript', 'email', 'description', 'schedule'];
    const optionalParamsWithDefault = defaultKeys.reduce(
      (obj: any, key: string) => {
        obj[key] = obj[key] ? obj[key] : '';
        return obj;
      },
      { ...optionalParams }
    );

    setFormInitialState(
      type,
      node.id,
      nodeTitle,
      values,
      setFieldValue,
      optionalParamsWithDefault
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

  const removeNodeFromDiagram = (
    node: NodeModel,
    subForm: 'sources' | 'transforms' | 'destinations'
  ): void => {
    app
      .getDiagramEngine()
      .getDiagramModel()
      .removeNode(node);

    const newValue = { ...values[subForm] };
    delete newValue[node.id];
    setFieldValue(subForm, newValue);
    dispatch(setRemoveSelectedNode(node));
    return;
  };

  return (
    <div className="Diagram">
      {isEditorOpen && selectedNode && selectedNode.id && (
        <TransformEditor id={selectedNode.id} />
      )}
      <DiagramView
        app={app}
        addNodeToDiagram={addNodeToDiagram}
        removeNodeFromDiagram={removeNodeFromDiagram}
      />
      <Toolbar
        selectedNode={selectedNode}
        addNodeToDiagram={addNodeToDiagram}
        removeNodeFromDiagram={removeNodeFromDiagram}
        setIsScheduleJobOpen={setIsScheduleJobOpen}
      />
      <Dialog open={isScheduleJobOpen} aria-labelledby="form-schedule-job">
        <ScheduleJob setIsScheduleJobOpen={setIsScheduleJobOpen} />
      </Dialog>
    </div>
  );
};

export default JobDesigner;
