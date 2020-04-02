import React, { useReducer, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import {
  sourceTilesRequestFetch,
  destinationRequestFetch
} from '../../../../State/Hydration/actions';
import Diagram from './Diagram/Diagram';
import JobDesigner from './JobDesigner/JobDesigner';
import { initialValues } from '../../../../State/Hydration/forms';

interface JobAppOuterLayerProps {
  app: any;
  hydrationFormikRef: any;
}

const JobAppOuterLayer = ({
  app,
  hydrationFormikRef
}: JobAppOuterLayerProps) => {
  // Use an incrementing counter to force a re-render of canvas
  // even if React state has not explicitly changed
  // https://reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const dispatch = useDispatch();

  const selectedNode = useSelector(
    ({ hydration }: any) => hydration.selectedNode
  );

  useEffect(() => {
    dispatch(sourceTilesRequestFetch());
    dispatch(destinationRequestFetch());
  }, [dispatch]);

  return (
    <Formik
      initialValues={initialValues}
      innerRef={hydrationFormikRef}
      onSubmit={(values, { setSubmitting }) => {
        console.log('formik onSubmit has been called');
        setSubmitting(false);
      }}
    >
      {({ handleSubmit, submitForm }) => (
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
const JobApp = React.memo(({ hydrationFormikRef }: any) => (
  <JobAppOuterLayer
    hydrationFormikRef={hydrationFormikRef}
    app={new Diagram()}
  />
));

export default JobApp;
