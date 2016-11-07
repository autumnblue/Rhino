import ClientState from '../../model/state/ClientState';
import map from './ClientMapper';
import reduce from '../crud/EditReducer';

const load = (dto) => map(dto, new ClientState());

const state = new ClientState('clients');
const reducer = reduce<ClientState>(state, load, 'clients'); 
export default reducer; 