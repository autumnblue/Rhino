import EmailServerState from '../../model/state/EmailServerState';
import reduce from '../crud/AddReducer';

const state = new EmailServerState();
const reducer = reduce<EmailServerState>(state, 'emailServer'); 
export default reducer;

