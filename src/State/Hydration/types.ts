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

export interface HydrationFormValues {
  test: string;
  sources: Sources;
}
