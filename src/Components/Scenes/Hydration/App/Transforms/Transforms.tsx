import React from 'react';
import { useDispatch } from 'react-redux';
import { Field } from 'formik';
import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { AddCircleOutline } from '@material-ui/icons';
import color from '@edma/design-tokens/js/color';
import ToolbarItemWidget from '../Toolbar/ToolbarItemWidget';
import {
  setSelectedNode,
  setIsEditorOpen
} from '../../../../../State/Hydration/actions';
import mockTransformsData from '../../../../../State/__mockData__/mockTransformsMetadata.json'; // TODO: change this to non-mock data when hitting the actual api
import { AddNodeToDiagram } from '../../../../../State/Hydration/types';

type TransformsProps = {
  addNodeToDiagram: AddNodeToDiagram;
};

const Transforms = ({ addNodeToDiagram }: TransformsProps) => {
  const dispatch = useDispatch();

  const setAddTransform = (event: React.FormEvent<HTMLFormElement>) => {
    const node = addNodeToDiagram('Untitled', { x: 400, y: 400 }, 'transform');
    node.selected = true;
    dispatch(setSelectedNode(event, node));
    dispatch(setIsEditorOpen(true));
  };
  const filterInput = document.getElementById('transformsFilter');

  return (
    <>
      <div className="Toolbar__filters">
        <SearchIcon
          className="Icon__search"
          onClick={() => {
            if (filterInput) filterInput.focus();
          }}
        />
        <Field
          id="transformsFilter"
          name="transformsFilter"
          className="Input__filter"
          label="Filter"
          as={TextField}
          variant="filled"
        />
      </div>
      <div className="Toolbar__list">
        {Object.values(mockTransformsData).map(({ name, sqlScript }, i) => (
          <ToolbarItemWidget
            key={`${name}-${i}`}
            model={{ type: 'transform', name, sqlScript }}
            name={name}
            color={color['c400']}
            onClick={() =>
              addNodeToDiagram(name, { x: 400, y: 400 }, 'transform', {
                sqlScript
              })
            }
          />
        ))}
      </div>
      <Button
        onClick={(event: any) => setAddTransform(event)}
        variant="contained"
        color="primary"
        className="Toolbar__btm-btn"
      >
        <AddCircleOutline />
        Add Transform
      </Button>
    </>
  );
};

export default Transforms;
