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

  const modelType =
    model.type === 'source'
      ? SourceIcon
      : model.type === 'transform'
      ? TransIcon
      : model.type === 'destination'
      ? DestIcon
      : '';

  const modelTypeDark =
    model.type === 'source'
      ? SourceIconDark
      : model.type === 'transform'
      ? TransIconDark
      : model.type === 'destination'
      ? DestIconDark
      : '';

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
        src={theme.palette.type === 'light' ? modelType : modelTypeDark}
        className={`Toolbar__item-icon`}
        alt={`${name} icon`}
      />{' '}
      {name}
    </div>
  );
};

export default ToolbarItemWidget;
