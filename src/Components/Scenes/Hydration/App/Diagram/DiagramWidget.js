import {
  DiagramWidget,
  MoveItemsAction,
  NodeModel,
  PointModel,
  PortModel
} from '@projectstorm/react-diagrams';
import TransformNodeModel from '../Nodes/TransformNodeModel';
import DestinationNodeModel from '../Nodes/DestinationNodeModel';
import * as _ from 'lodash';

class CustomDiagramWidget extends DiagramWidget {
  /**
   * this method runs anytime mouse click is let go
   * NOTE: only the marked section is the code that differs
   * from the library, all else is copied from library
   * to provide expected functionality
   */
  onMouseUp(event) {
    var diagramEngine = this.props.diagramEngine;

    // are we going to connect a link to something?
    if (this.state.action instanceof MoveItemsAction) {
      var element = this.getMouseElement(event);

      _.forEach(this.state.action.selectionModels, model => {
        // only care about points connecting to things
        if (!(model.model instanceof PointModel)) {
          return;
        }

        // =============================================
        // =============================================
        /**
         * this section is the part that differs from the library
         *
         */
        if (element && element.model instanceof NodeModel) {
          const link = model.model.getLink();
          const targetNode = element.model;

          // if link has already been attached to the target port,
          // no need to setTargetPort
          if (link.getTargetPort()) {
            return;
          }

          // make sure that setTargetPort is run only when attaching
          // to Transforms or Destinations
          if (
            targetNode instanceof TransformNodeModel ||
            targetNode instanceof DestinationNodeModel
          ) {
            // link is set to the target port on the left
            const targetPort = element.model.ports.left;
            link.setTargetPort(targetPort);
            delete this.props.diagramEngine.linksThatHaveInitiallyRendered[
              link.getID()
            ];
          }
        }
        // =============================================
        // =============================================

        if (
          element &&
          element.model instanceof PortModel &&
          !diagramEngine.isModelLocked(element.model)
        ) {
          let link = model.model.getLink();

          if (link.getTargetPort() !== null) {
            // if this was a valid link already and we are adding a node in the middle
            // create 2 links from the original
            if (
              link.getTargetPort() !== element.model &&
              link.getSourcePort() !== element.model
            ) {
              const targetPort = link.getTargetPort();
              let newLink = link.clone({});
              newLink.setSourcePort(element.model);
              newLink.setTargetPort(targetPort);
              link.setTargetPort(element.model);
              targetPort.removeLink(link);
              newLink.removePointsBefore(
                newLink.getPoints()[link.getPointIndex(model.model)]
              );
              link.removePointsAfter(model.model);
              diagramEngine.getDiagramModel().addLink(newLink);
              // if we are connecting to the same target or source, remove tweener points
            } else if (link.getTargetPort() === element.model) {
              link.removePointsAfter(model.model);
            } else if (link.getSourcePort() === element.model) {
              link.removePointsBefore(model.model);
            }
          } else {
            link.setTargetPort(element.model);
          }
          delete this.props.diagramEngine.linksThatHaveInitiallyRendered[
            link.getID()
          ];
        }
      });

      // check for / remove any loose links in any models which have been moved
      if (!this.props.allowLooseLinks && this.state.wasMoved) {
        _.forEach(this.state.action.selectionModels, model => {
          // only care about points connecting to things
          if (!(model.model instanceof PointModel)) {
            return;
          }

          let selectedPoint = model.model;
          let link = selectedPoint.getLink();
          if (link.getSourcePort() === null || link.getTargetPort() === null) {
            link.remove();
          }
        });
      }

      // remove any invalid links
      _.forEach(this.state.action.selectionModels, model => {
        // only care about points connecting to things
        if (!(model.model instanceof PointModel)) {
          return;
        }

        let link = model.model.getLink();
        let sourcePort = link.getSourcePort();
        let targetPort = link.getTargetPort();
        if (sourcePort !== null && targetPort !== null) {
          if (!sourcePort.canLinkToPort(targetPort)) {
            // link not allowed
            link.remove();
          } else if (
            _.some(
              _.values(targetPort.getLinks()),
              l =>
                l !== link &&
                (l.getSourcePort() === sourcePort ||
                  l.getTargetPort() === sourcePort)
            )
          ) {
            // link is a duplicate
            link.remove();
          }
        }
      });

      diagramEngine.clearRepaintEntities();
      this.stopFiringAction(!this.state.wasMoved);
    } else {
      diagramEngine.clearRepaintEntities();
      this.stopFiringAction();
    }
    this.state.document.removeEventListener('mousemove', this.onMouseMove);
    this.state.document.removeEventListener('mouseup', this.onMouseUp);
  }
}

export default CustomDiagramWidget;
