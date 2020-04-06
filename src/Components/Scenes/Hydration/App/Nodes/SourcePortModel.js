import { DefaultLinkModel, PortModel } from '@projectstorm/react-diagrams';
import store from '../../../../../setupStore';
import { setSnackbarText } from '../../../../../State/Hydration/actions';

export default class SourcePortModel extends PortModel {
  constructor(position) {
    super(position, 'source');
  }

  createLinkModel() {
    return new DefaultLinkModel('source');
  }

  canLinkToPort(port) {
    const sourceType = this.getNode().name;
    const targetPort = port.type;
    if (sourceType === 'KIRBY' && targetPort === 'destination') {
      store.dispatch(
        setSnackbarText(
          'Kirby Source Tiles must be connected to a Transform Tile'
        )
      );
      return false;
    }
    return true;
  }
}
