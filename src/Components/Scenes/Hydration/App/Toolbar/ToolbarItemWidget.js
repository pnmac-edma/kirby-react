import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import SourceIcon from '../../../../../assets/img/icon.hydration.source.svg';
import TransIcon from '../../../../../assets/img/icon.hydration.trans.svg';
import DestIcon from '../../../../../assets/img/icon.hydration.dest.svg';
import SourceIconDark from '../../../../../assets/img/icon.hydration.source.dark.svg';
import TransIconDark from '../../../../../assets/img/icon.hydration.trans.dark.svg';
import DestIconDark from '../../../../../assets/img/icon.hydration.dest.dark.svg';

const ToolbarItemWidget = props => {
  const theme = useTheme();
  const { model, color, name, onClick } = props;

  return (
    <div
      style={{ borderColor: color }}
      draggable={true}
      onDragStart={event => {
        event.dataTransfer.setData('storm-diagram-node', JSON.stringify(model));
      }}
      className="Toolbar__nodetype"
      onClick={onClick}
    >
      <img
        src={
          theme.palette.type === 'light'
            ? model.type === 'source'
              ? SourceIcon
              : model.type === 'trans'
              ? TransIcon
              : model.type === 'dest'
              ? DestIcon
              : ''
            : model.type === 'source'
            ? SourceIconDark
            : model.type === 'trans'
            ? TransIconDark
            : model.type === 'dest'
            ? DestIconDark
            : ''
        }
        className={`Toolbar__item-icon`}
        alt={`${name} icon`}
      />{' '}
      {name}
    </div>
  );
};

export default ToolbarItemWidget;
