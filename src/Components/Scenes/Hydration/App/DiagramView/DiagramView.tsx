import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import color from '@edma/design-tokens/js/color';
import { DiagramWidget } from '@projectstorm/react-diagrams';

const useStyles = makeStyles(theme => ({
  diagramCanvas: {
    background: theme.palette.type === 'light' ? color.g50 : color.g900
  }
}));

interface DiagramViewProps {
  app: any;
  addNodeToDiagram: (type: string, x: number, y: number, name: string) => void;
}

const DiagramView = (props: DiagramViewProps) => {
  const { addNodeToDiagram, app } = props;
  const classes = useStyles();

  return (
    <div
      className="Diagram__layer"
      onDrop={event => {
        const data = JSON.parse(
          event.dataTransfer.getData('storm-diagram-node')
        );
        const points = app.getDiagramEngine().getRelativeMousePoint(event);
        addNodeToDiagram(data.type, points.x, points.y, data.name);
      }}
      onDragOver={event => event.preventDefault()}
    >
      <DiagramWidget
        className={`${classes.diagramCanvas} Diagram__canvas`}
        diagramEngine={app.getDiagramEngine()}
      />
    </div>
  );
};

export default DiagramView;
