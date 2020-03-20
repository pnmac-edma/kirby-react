import React, { useReducer } from 'react';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import Diagram from './Diagram/Diagram';
import JobDesigner from './JobDesigner/JobDesigner';
import { initialValues } from '../../../../State/Hydration/forms';

interface JobAppOuterLayerProps {
  app: any;
}

const JobAppOuterLayer = ({ app }: JobAppOuterLayerProps) => {
  // Use an incrementing counter to force a re-render of canvas
  // even if React state has not explicitly changed
  // https://reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const selectedNode = useSelector(
    ({ hydration }: any) => hydration.selectedNode
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <JobDesigner
            app={app}
            forceUpdate={forceUpdate}
            selectedNode={selectedNode}
          />
        </form>
      )}
    </Formik>
  );
};

// only runs the Diagram constructor when component first renders
// and prevents any re-renders (any re-renders will cause nodes to be lost)
const JobApp = React.memo(() => <JobAppOuterLayer app={new Diagram()} />);

export default JobApp;
