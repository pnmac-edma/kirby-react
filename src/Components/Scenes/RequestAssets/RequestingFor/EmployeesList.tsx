import React from 'react';
import { FixedSizeList as List } from 'react-window';

const height = 35;

const MenuList = ({
  children,
  getValue,
  maxHeight,
  options
}: MenuListProps) => {
  const [value] = getValue();
  const initialOffset = options.indexOf(value) * height;

  return (
    <List
      height={maxHeight}
      width={400}
      itemCount={children.length}
      itemSize={height}
      initialScrollOffset={initialOffset}
    >
      {({ index, style }: any) => <div style={style}>{children[index]}</div>}
    </List>
  );
};

export default MenuList;

interface MenuListProps {
  options: any;
  children: any;
  maxHeight: number;
  getValue: any;
}
