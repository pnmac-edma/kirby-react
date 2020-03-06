import React from 'react';
import { useFormikContext } from 'formik';
import Rdbms from './Rdbms';
import Sftp from './Sftp';
import Api from './Api';
import { initialStateTypes } from '../../../../../State/Hydration/types';

interface SourceProps {
  id: string;
  sourceType: string;
}

const Source = (props: SourceProps) => {
  const { id, sourceType } = props;
  const { values } = useFormikContext() as { values: initialStateTypes };
  const { sources } = values;

  return (
    <>
      {sources[id] && (
        <>
          {sourceType === 'RDBMS' && <Rdbms id={id} />}
          {sourceType === 'SFTP' && <Sftp id={id} />}
          {sourceType === 'API' && <Api id={id} />}
        </>
      )}
    </>
  );
};

export default Source;
