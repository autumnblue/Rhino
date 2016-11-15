import reduce from '../common';
import ClientState from '../../model/stateZ/client/ClientState'
import ClientRecord from '../../model/stateZ/client/ClientRecord'

export default reduce(new ClientState(), new ClientRecord());