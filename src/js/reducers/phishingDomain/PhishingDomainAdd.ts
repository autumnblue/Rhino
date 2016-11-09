import PhishingDomainState from '../../model/state/PhishingDomainState';
import reduce from '../crud/AddReducer';

const QUALIFIER = 'phishingDomain';

const state = new PhishingDomainState();
const reducer = reduce<PhishingDomainState>(new PhishingDomainState(QUALIFIER), QUALIFIER); 
export default reducer;

