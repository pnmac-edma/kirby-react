import { DiagramModel, DiagramEngine } from '@projectstorm/react-diagrams';

// action constant types
export const SET_SELECTED_NODE = 'SET_SELECTED_NODE';
export const SET_REMOVE_SELECTED_NODE = 'SET_REMOVE_SELECTED_NODE';
export const SET_IS_EDITOR_OPEN = 'SET_IS_EDITOR_OPEN';
export const SET_IS_DESTINATION_MODAL_OPEN = 'SET_IS_DESTINATION_MODAL_OPEN';
export const HANDLE_TITLE_NAME = 'HANDLE_TITLE_NAME';
export const SET_IS_SNACKBAR_OPEN = 'SET_IS_SNACKBAR_OPEN';
export const SET_SNACKBAR_TEXT = 'SET_SNACKBAR_TEXT';
export const SET_SNACKBAR_EXIT = 'SET_SNACKBAR_EXIT';
export const SET_IS_UPLOAD_MODAL_OPEN = 'SET_IS_UPLOAD_MODAL_OPEN';
// SOURCE TILE FETCH
export const SOURCE_TILES_REQUESTS_FETCH = 'SOURCE_TILES_REQUESTS_FETCH';
export const SOURCE_TILES_REQUESTS_SUCCESS = 'SOURCE_TILES_REQUESTS_SUCCESS';
export const SOURCE_TILES_REQUESTS_FAILURE = 'SOURCE_TILES_REQUESTS_FAILURE';
// DESTINATION FETCH
export const DESTINATIONS_REQUEST_FETCH = 'DESTINATIONS_REQUEST_FETCH';
export const DESTINATIONS_REQUEST_SUCCESS = 'DESTINATIONS_REQUEST_SUCCESS';
export const DESTINATIONS_REQUEST_FAILURE = 'DESTINATIONS_REQUEST_FAILURE';
// DESTINATIONDROPDOWN FETCH
export const DESTINATIONS_DROPDOWN_REQUEST_FETCH =
  'DESTINATIONS_DROPDOWN_REQUEST_FETCH';
export const DESTINATIONS_DROPDOWN_REQUEST_SUCCESS =
  'DESTINATIONS_DROPDOWN_REQUEST_SUCCESS';
export const DESTINATIONS_DROPDOWN_REQUEST_FAILURE =
  'DESTINATIONS_DROPDOWN_REQUEST_FAILURE';
// NEW DESTINATION FETCH
export const NEW_DESTINATION_REQUEST_FETCH = 'NEW_DESTINATION_REQUEST_FETCH';
export const NEW_DESTINATION_REQUEST_SUCCESS =
  'NEW_DESTINATION_REQUEST_SUCCESS';
export const NEW_DESTINATION_REQUEST_FAILURE =
  'NEW_DESTINATION_REQUEST_FAILURE';
// NEW DESTINATION FETCH
export const DATABASE_CHECK_REQUEST_FETCH = 'DATABASE_CHECK_REQUEST_FETCH';
export const DATABASE_CHECK_REQUEST_SUCCESS = 'DATABASE_CHECK_REQUEST_SUCCESS';
export const DATABASE_CHECK_REQUEST_FAILURE = 'DATABASE_CHECK_REQUEST_FAILURE';
// types
export interface KIRBY {
  sourceType: string;
  host: string;
  port: string;
  folder: string;
  isConnected: boolean;
  connectionType: string;
}

export interface RDBMS {
  sourceType: string;
  sourceVersion: string;
  server: string;
  schema: string;
  port: number;
  isConnected: boolean;
  connectionType: string;
}

export interface SFTP {
  sourceType: string;
  host: string;
  port: string;
  folder: string;
  isConnected: boolean;
  connectionType: string;
}

export interface API {
  sourceType: string;
  type: string;
  httpMethod: string;
  url: string;
  isConnected: boolean;
  connectionType: string;
}
/* 
=============================
  API RESPONSE
  SourceTiles and SourceTile are API response structure
  TODO Need to organize Sources & SourceTiles and SourceTile
==============================
*/
export interface SourceTiles {
  [id: number]: SourceTile;
}

export interface SourceTile {
  Id: number;
  createddate: string;
  createdbyemail: string;
  sourcetypedesc: string;
}

export interface Destinations {
  [id: number]: Destination;
}

export interface Destination {
  Id: number;
  createddate: string;
  createdbyemail: string;
  sensitivity: string;
}

export interface DestinationDropDowns {
  [id: number]: DestinationDropDown;
}

export interface DestinationDropDown {
  Id: number;
  databasename: string;
  sensitivity: string;
}

export interface Sources {
  [id: string]: KIRBY | RDBMS | SFTP | API;
}

export interface InitialStateTypes {
  sources: Sources;
  transforms: Transforms;
  transformsFilter: string;
  destinations: Destinations;
  destinationsFilter: string;
  destinationsFilterSens: string;
  destinationsCreate: Destination;
  scheduleJob: ScheduleJob;
}

export interface Destinations {
  [id: string]: Destination;
}

export interface Destination {
  name: string;
  email: string;
  sensitivity: string;
  domain: string;
  description: string;
  justification: string;
}

export interface Transforms {
  [id: string]: Transform;
}

export interface Transform {
  name: string;
  sqlScript: string;
  tips: string;
  queryReults: Array<any>;
}

export interface ScheduleJob {
  calendarTeam: string;
  startsOn: Date;
  repeats: {
    num: number;
    interval: string;
    selectedDays: SelectedDays;
    weekOfMonth: string;
  };
  fails: {
    num: number;
    interval: string;
  };
  enableJob: boolean;
}

export interface SelectedDays {
  [day: string]: boolean;
}

export type AddNodeToDiagram = (
  nodeTitle: string,
  position: { x: number; y: number },
  type: string,
  optionalParams?: OptionalParamsNode
) => NodeModel;

// TODO: need to add this typing to appropriate location
//       and need to fix the subform enum string typing
//       in keyboardshortcuts
export type RemoveNodeFromDiagram = (node: NodeModel, subForm: any) => void;

export interface AppEngine {
  engine: DiagramEngine;
  model: DiagramModel;
  getDiagramEngine: Function;
}

export interface NodeModel {
  listeners: any;
  id: string;
  locked: boolean;
  type: 'source' | 'transform' | 'destination';
  selected: boolean;
  x: number;
  y: number;
  extras: Object;
  ports: any;
  name: string;
  size: number;
  remove: Function;
}

export interface OptionalParamsNode {
  sqlScript?: string;
  email?: string;
  description?: string;
  schedule?: string;
  sensitivity?: string;
}
