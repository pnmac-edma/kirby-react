import { InitialStateTypes } from './types';

/** EXPECTED FORM INITIAL STATE
 * jobName: '',
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

export const kirbyInitialState = {
  sourceType: null,
  host: '',
  port: '',
  folder: '',
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

export const selectedDaysInitialState = {
  su: false,
  mo: false,
  tu: false,
  we: false,
  th: false,
  fr: false,
  sa: false
};

export const scheduleJobInitialState = {
  calendarTeam: 'EDMA',
  startsOn: new Date(Date.now()),
  repeats: {
    num: 1,
    interval: 'Days',
    selectedDays: selectedDaysInitialState,
    weekOfMonth: 'first'
  },
  fails: {
    num: 1,
    interval: 'Retries'
  },
  enableJob: true
};

export const initialValues = {
  sources: {},
  transforms: {},
  transformsFilter: '',
  destinations: {},
  destinationsFilter: '',
  destinationsFilterSens: '',
  destinationsCreate: destinationInitialState,
  scheduleJob: scheduleJobInitialState
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
  } else if (sourceType === 'KIRBY') {
    sourceForm = kirbyInitialState;
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
): void => {
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
