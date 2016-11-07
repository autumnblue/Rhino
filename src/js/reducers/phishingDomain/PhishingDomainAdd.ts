import PhishingDomainState from '../../model/state/PhishingDomainState';
import reduce from '../crud/AddReducer';

const state = new PhishingDomainState();
const reducer = reduce<PhishingDomainState>(state, 'phishingDomain'); 
export default reducer;

