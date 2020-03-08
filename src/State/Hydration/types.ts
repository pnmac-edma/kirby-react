// action constant types
export const SET_SELECTED_NODE = 'SET_SELECTED_NODE';
export const SET_REMOVE_NODE = 'SET_REMOVE_NODE';
export const SET_IS_EDITOR_OPEN = 'SET_IS_EDITOR_OPEN';

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

export interface initialStateTypes {
  sources: Sources;
  transforms: Transforms;
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

export type AddNodeToDiagram = (
  nodeTitle: string,
  position: { x: number; y: number },
  type: string
) => any;
