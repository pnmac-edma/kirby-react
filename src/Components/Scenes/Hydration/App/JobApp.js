import React, { useState, useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import color from '@edma/design-tokens/js/color';
import { DiagramWidget } from '@projectstorm/react-diagrams';
import { Toolbar } from '../AppToolbar/Toolbar';
import Diagram from './Diagram';
import { DestNodeModel, SourceNodeModel, TransNodeModel } from '../AppNodes';

const diagramStyles = makeStyles(theme => ({
  diagramCanvas: {
    background: theme.palette.type === 'light' ? color.g50 : color.g900
  }
}));

const JobDesigner = props => {
  const { app } = props;
  const classes = diagramStyles();

  const [selectedNode, setSelectedNode] = useState(null);
  // Use an incrementing counter to force a re-render of canvas
  // even if React state has not explicitly changed
  // https://reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const addNodeToDiagram = (type, x, y) => {
    let node;

    if (type === 'source') node = new SourceNodeModel();
    else if (type === 'trans') node = new TransNodeModel();
    else if (type === 'dest') node = new DestNodeModel();
    node.x = x;
    node.y = y;
    app
      .getDiagramEngine()
      .getDiagramModel()
      .addNode(node);
    node.addListener({
      selectionChanged: event => {
        if (event.isSelected) {
          setSelectedNode(event.entity);
        } else {
          setSelectedNode(null);
        }
      },
      entityRemoved: event => setSelectedNode(null)
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
          addNodeToDiagram(data.type, points.x, points.y);
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

const JobApp = () => <JobDesigner app={new Diagram()} />;

export default JobApp;
