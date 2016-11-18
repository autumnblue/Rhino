import reduce from '../common';
import PlunderState from '../../model/stateZ/plunder/PlunderState'
import PlunderRecord from '../../model/stateZ/plunder/PlunderRecord'

export default reduce(new PlunderState(), new PlunderRecord());