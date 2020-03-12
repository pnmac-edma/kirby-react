import { DiagramModel, DiagramEngine } from '@projectstorm/react-diagrams';

// action constant types
export const SET_SELECTED_NODE = 'SET_SELECTED_NODE';
export const SET_REMOVE_NODE = 'SET_REMOVE_NODE';
export const SET_IS_EDITOR_OPEN = 'SET_IS_EDITOR_OPEN';
export const SET_IS_DESTINATION_MODAL_OPEN = 'SET_IS_DESTINATION_MODAL_OPEN';

// types
export interface RDBMS {
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

enum Source {
  RDBMS,
  SFTP,
  API
}

export interface Sources {
  [id: string]: Source;
}

export interface InitialStateTypes {
  sources: Sources;
  transforms: Transforms;
  transformsFilter: string;
  destinations: Destinations;
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
  startsOn: {
    date: string;
    time: string;
  };
  repeat: {
    num: number;
    interval: string;
    days: Array<string>;
  };
  fails: {
    num: number;
    interval: string;
  };
}

export type AddNodeToDiagram = (
  nodeTitle: string,
  position: { x: number; y: number },
  type: string,
  optionalParams?: OptionalParamsNode
) => NodeModel;

export interface AppEngine {
  engine: DiagramEngine;
  model: DiagramModel;
  getDiagramEngine: Function;
}

export interface NodeModel {
  listeners: any;
  id: string;
  locked: boolean;
  type: string;
  selected: boolean;
  x: number;
  y: number;
  extras: Object;
  ports: any;
  name: string;
  size: number;
}

export interface OptionalParamsNode {
  sqlScript?: string;
  email?: string;
  description?: string;
  schedule?: string;
}
