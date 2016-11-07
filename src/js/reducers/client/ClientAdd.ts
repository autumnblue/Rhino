import ClientState from '../../model/state/ClientState';
import reduce from '../crud/AddReducer';

const state = new ClientState('clients');

const reducer = reduce<ClientState>(state, 'clients');
export default reducer;