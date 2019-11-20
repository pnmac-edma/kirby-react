import React from 'react';
import { FixedSizeList as List } from 'react-window';

const UserList = props => {
  const { options, children, maxHeight, getValue } = props;
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

export default UserList;
