import ClientState from '../../model/state/ClientState';
import reduce from '../crud/EditReducer';

const state = new ClientState('clients');
const reducer = reduce<ClientState>(state, null, 'clients'); 
export default reducer; 