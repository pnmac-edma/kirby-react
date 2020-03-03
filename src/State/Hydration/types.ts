// action constant types
export const SET_SELECTED_NODE = 'SET_SELECTED_NODE';
export const SET_REMOVE_NODE = 'SET_REMOVE_NODE';

// types

export interface RDBMS {
  sourceVersion: string;
  server: string;
  schema: string;
  port: number;
  isConnected: boolean;
  connectionType: string;
}

export interface Sources {
  [id: string]: any;
}

// enum Source {
//   RDBMS,
//   SFTP,
//   API,
// }

export interface SFTP {}

export interface API {}

export interface HydrationFormValues {
  test: string;
  sources: Sources;
}
