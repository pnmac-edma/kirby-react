import React, { useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import color from '@edma/design-tokens/js/color';
import { DiagramWidget } from '@projectstorm/react-diagrams';
import { Toolbar } from './Toolbar/Toolbar';
import Diagram from './Diagram/Diagram';
import { DestNodeModel, SourceNodeModel, TransNodeModel } from './Nodes';
import { actions } from '../../../../State/Hydration';
import { HydrationFormValues } from '../../../../State/Hydration/types';

const diagramStyles = makeStyles(theme => ({
  diagramCanvas: {
    background: theme.palette.type === 'light' ? color.g50 : color.g900
  }
}));

// export const initialState = {
//   jobName: '',
//   selectedNode: null,
//   sources: {},
//   transforms: {},
//   transformsFilter: '',
//   transformsCreate: {},
//   destinations: {},
//   destinationsFilterSens: [],
//   destinationsFilter: '',
//   destinationsCreate: {},
//   scheduleJob: {}
// };

const initialValues: HydrationFormValues = {
  test: '',
  sources: {}
};

const JobDesigner = (props: any) => {
  const { app } = props;
  const classes = diagramStyles();

  // Use an incrementing counter to force a re-render of canvas
  // even if React state has not explicitly changed
  // https://reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const selectedNode = useSelector(
    ({ hydration }: any) => hydration.selectedNode
  );
  const dispatch = useDispatch();
  const { setSelectedNode } = actions;

  const addNodeToDiagram = (
    type: string,
    x: number,
    y: number,
    subtype: string | null = null
  ) => {
    let node: any;

    if (type === 'source') node = new SourceNodeModel();
    else if (type === 'trans') node = new TransNodeModel();
    else if (type === 'dest') node = new DestNodeModel();

    node.x = x;
    node.y = y;
    node.subtype = subtype;

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
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ values, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className={`Diagram`}>
            <div
              className="Diagram__layer"
              onDrop={event => {
                const data = JSON.parse(
                  event.dataTransfer.getData('storm-diagram-node')
                );
                const points = app
                  .getDiagramEngine()
                  .getRelativeMousePoint(event);
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
        </form>
      )}
    </Formik>
  );
};

const JobApp = () => <JobDesigner app={new Diagram()} />;

export default JobApp;
