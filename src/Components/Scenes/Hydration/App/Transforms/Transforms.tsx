import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import color from '@edma/design-tokens/js/color';
import ToolbarItemWidget from '../Toolbar/ToolbarItemWidget';
import {
  setSelectedNode,
  setIsEditorOpen
} from '../../../../../State/Hydration/actions';
import mockTransformsData from '../../../../../State/__mockData__/mockTransformsMetadata.json'; // TODO: change this to non-mock data when hitting the actual api

type TransformsProps = {
  addNodeToDiagram: (type: string, x: number, y: number, name: string) => any;
};

const Transforms = ({ addNodeToDiagram }: TransformsProps) => {
  const dispatch = useDispatch();

  const setAddTransform = (event: React.FormEvent<HTMLFormElement>) => {
    const node = addNodeToDiagram('trans', 400, 400, 'Untitled');
    node.selected = true;
    dispatch(setSelectedNode(event, node));
    dispatch(setIsEditorOpen(true));
  };

  return (
    <>
      {Object.values(mockTransformsData).map(({ name, sqlScript }, i) => (
        <ToolbarItemWidget
          key={`${name}-${i}`}
          model={{ type: 'trans', name, sqlScript }}
          name={name}
          color={color['c400']}
          onClick={() => addNodeToDiagram('trans', 400, 400, name)}
        />
      ))}
      <Button
        onClick={(event: any) => setAddTransform(event)}
        variant="contained"
        color="primary"
      >
        <AddCircleOutline />
        Add Transform
      </Button>
    </>
  );
};

export default Transforms;
