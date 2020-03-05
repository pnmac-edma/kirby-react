import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormikContext } from 'formik';
import DiagramView from '../DiagramView/DiagramView';
import { Toolbar } from '../Toolbar/Toolbar';
import { DestNodeModel, SourceNodeModel, TransNodeModel } from '../Nodes';
import { setSelectedNode } from '../../../../../State/Hydration/actions';
import Transform from '../Transform/Transform';
import {
  rdbmsInitialState,
  sftpInitialState,
  apiInitialState,
  transformInitialState
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

  return {
    ...formValues.sources,
    [id]: { ...sourceForm, sourceType }
  };
};

const generateTransformInitialState = (id: string, formValues: any) => {
  let transformForm: any;
  if (formValues.transforms[id]) {
    transformForm = formValues.transforms[id];
  } else {
    transformForm = transformInitialState;
  }

  return {
    ...formValues.transforms,
    [id]: transformForm
  };
};

const JobDesigner = (props: any) => {
  const { app, forceUpdate, selectedNode } = props;
  const { values, setFieldValue } = useFormikContext() as any;
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
  };
  const [close, setClose] = useState(true); // TODO: set close and open editor properly
  console.log(values);

  return (
    <div className={`Diagram`}>
      <button type="button" onClick={() => setClose(!close)}>
        switch
      </button>
      {selectedNode && selectedNode.type === 'trans' && close && (
        <Transform id={selectedNode.id} />
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
