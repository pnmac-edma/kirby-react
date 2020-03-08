/** EXPECTED FORM INITIAL STATE
 * jobName: '',
 * selectedNode: null,
 * sources: {},
 * transforms: {},
 * transformsFilter: '',
 * transformsCreate: {},
 * destinations: {},
 * destinationsFilterSens: [],
 * destinationsFilter: '',
 * destinationsCreate: {},
 * scheduleJob: {}
 */

export const initialValues = {
  sources: {},
  transforms: {}
};

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

export const generateTransformInitialState = (id: string, formValues: any) => {
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
