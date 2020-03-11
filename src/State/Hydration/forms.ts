import { InitialStateTypes } from './types';

/** EXPECTED FORM INITIAL STATE
 * jobName: '',
 * selectedNode: null,
 * sources: {},
 * transforms: {},
 * transformsFilter: '',
 * destinations: {},
 * destinationsFilterSens: [],
 * destinationsFilter: '',
 * destinationsCreate: {},
 * scheduleJob: {}
 */

export const rdbmsInitialState = {
  sourceType: null,
  sourceVersion: '',
  server: '',
  schema: '',
  port: '',
  isConnected: false,
  connectionType: ''
};

export const sftpInitialState = {
  sourceType: null,
  host: '',
  port: '',
  folder: '',
  isConnected: false,
  connectionType: ''
};

export const apiInitialState = {
  sourceType: null,
  type: '',
  httpMethod: '',
  url: '',
  isConnected: false,
  connectionType: ''
};

export const transformInitialState = {
  name: '',
  sqlScript: '',
  tips: '',
  queryResults: []
};

export const destinationInitialState = {
  name: '',
  email: '',
  description: '',
  schedule: '',
  domain: '',
  justification: '',
  sensitivity: ''
};

export const initialValues = {
  sources: {},
  transforms: {},
  transformsFilter: '',
  destinations: {},
  destinationsFilter: '',
  destinationsFilterSens: '',
  destinationsCreate: { ...destinationInitialState }
};

export const generateSourceInitialState = (
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

export const generateTransformInitialState = (
  id: string,
  name: string,
  formValues: any,
  sqlScript: string
) => {
  let transformForm: any;
  if (formValues.transforms[id]) {
    transformForm = formValues.transforms[id];
  } else {
    transformForm = transformInitialState;
  }

  return {
    ...formValues.transforms,
    [id]: {
      ...transformForm,
      name,
      sqlScript
    }
  };
};

export const generateDestinationInitialState = (
  id: string,
  name: string,
  formValues: any,
  optionalParams: {
    sqlScript: string;
    email: string;
    description: string;
    schedule: string;
  }
) => {
  const { email, description, schedule } = optionalParams;
  let destinationForm: any;
  if (formValues.destinations[id]) {
    destinationForm = formValues.destinations[id];
  } else {
    destinationForm = destinationInitialState;
  }

  return {
    ...formValues.destinations,
    [id]: {
      ...destinationForm,
      name,
      email,
      description,
      schedule
    }
  };
};

export const setFormInitialState = (
  type: string,
  nodeId: string,
  nodeTitle: string,
  values: InitialStateTypes,
  setFieldValue: (field: string, value: any) => void,
  optionalParams: {
    sqlScript: string;
    email: string;
    description: string;
    schedule: string;
  }
): any => {
  if (type === 'source') {
    setFieldValue(
      'sources',
      generateSourceInitialState(nodeId, nodeTitle, values)
    );
  } else if (type === 'transform') {
    setFieldValue(
      'transforms',
      generateTransformInitialState(
        nodeId,
        nodeTitle,
        values,
        optionalParams.sqlScript
      )
    );
  } else if (type === 'destination') {
    setFieldValue(
      'destinations',
      generateDestinationInitialState(nodeId, nodeTitle, values, optionalParams)
    );
  }
  return;
};
