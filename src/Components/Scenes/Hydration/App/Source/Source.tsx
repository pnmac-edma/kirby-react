import React from 'react';
import { useFormikContext } from 'formik';
import Rdbms from './Rdbms';
import Sftp from './Sftp';
import Api from './Api';
import {
  InitialStateTypes,
  NodeModel
} from '../../../../../State/Hydration/types';
import { keyboardShortcuts } from '../../../../../State/Hydration/helpers';

interface SourceProps {
  id: string;
  sourceType: string;
  removeNodeFromDiagram: (
    node: NodeModel,
    subForm: 'sources' | 'transforms' | 'destinations'
  ) => void;
}

const Source = (props: SourceProps) => {
  const { id, sourceType, removeNodeFromDiagram } = props;
  const { values } = useFormikContext() as { values: InitialStateTypes };
  const { sources } = values;

  return (
    <>
      {sources[id] && (
        <div onKeyUp={(e: React.KeyboardEvent) => keyboardShortcuts.source(e)}>
          {sourceType === 'RDBMS' && (
            <Rdbms id={id} removeNodeFromDiagram={removeNodeFromDiagram} />
          )}
          {sourceType === 'SFTP' && (
            <Sftp id={id} removeNodeFromDiagram={removeNodeFromDiagram} />
          )}
          {sourceType === 'API' && (
            <Api id={id} removeNodeFromDiagram={removeNodeFromDiagram} />
          )}
        </div>
      )}
    </>
  );
};

export default Source;
