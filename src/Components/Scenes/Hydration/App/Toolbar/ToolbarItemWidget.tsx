import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import SourceIcon from '../../../../../assets/img/icon.hydration.source.svg';
import TransIcon from '../../../../../assets/img/icon.hydration.trans.svg';
import DestIcon from '../../../../../assets/img/icon.hydration.dest.svg';
import DisabledIcon from '../../../../../assets/img/icon.hydration.disabled.svg';
import SourceIconDark from '../../../../../assets/img/icon.hydration.source.dark.svg';
import TransIconDark from '../../../../../assets/img/icon.hydration.trans.dark.svg';
import DestIconDark from '../../../../../assets/img/icon.hydration.dest.dark.svg';
import DisabledIconDark from '../../../../../assets/img/icon.hydration.disabled.dark.svg';
import { NodeModel } from '../../../../../State/Hydration/types';

interface ToolbarItemWidget {
  disabled?: boolean | null;
  name: string;
  onClick: () => NodeModel;
  color: string;
  model: any;
}

const ToolbarItemWidget = ({
  disabled = false,
  name,
  color,
  model,
  onClick
}: ToolbarItemWidget) => {
  const theme = useTheme();

  const modelType =
    model.type === 'source'
      ? disabled
        ? DisabledIcon
        : SourceIcon
      : model.type === 'transform'
      ? disabled
        ? DisabledIcon
        : TransIcon
      : model.type === 'destination'
      ? disabled
        ? DisabledIcon
        : DestIcon
      : '';

  const modelTypeDark =
    model.type === 'source'
      ? disabled
        ? DisabledIconDark
        : SourceIconDark
      : model.type === 'transform'
      ? disabled
        ? DisabledIconDark
        : TransIconDark
      : model.type === 'destination'
      ? disabled
        ? DisabledIconDark
        : DestIconDark
      : '';

  return (
    <div
      style={{ borderColor: color }}
      draggable={!disabled}
      onDragStart={
        disabled
          ? undefined
          : event => {
              event.dataTransfer.setData(
                'storm-diagram-node',
                JSON.stringify(model)
              );
            }
      }
      className={`Toolbar__list-item${
        disabled ? ' Toolbar__list-item--disabled' : ''
      }`}
      onClick={disabled ? undefined : onClick}
    >
      <img
        src={theme.palette.type === 'light' ? modelType : modelTypeDark}
        className={
          disabled ? 'Toolbar__item-icon-disabled' : 'Toolbar__item-icon'
        }
        alt={`${name} icon`}
      />{' '}
      {name}
    </div>
  );
};

export default ToolbarItemWidget;
