import React from 'react';
import { FixedSizeList as List } from 'react-window';

const EmployeeList = props => {
  const { options, children, maxHeight, getValue } = props;
  console.log('maxhieght', props);
  const [value] = getValue();
  const initialOffset = options.indexOf(value) * 35;

  return (
    <List
      height={maxHeight}
      itemCount={children.length}
      itemSize={35}
      initialScrollOffset={initialOffset}
    >
      {({ index, style }) => <div style={style}>{children[index]}</div>}
    </List>
  );
};

export default EmployeeList;
