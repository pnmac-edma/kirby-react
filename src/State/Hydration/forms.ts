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
  test: '',
  sources: {}
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
