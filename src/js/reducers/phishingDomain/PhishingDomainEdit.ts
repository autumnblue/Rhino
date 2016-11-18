import PhishingDomainState from '../../model/state/PhishingDomainState';
import map from './PhishingDomainMapper';
import reduce from '../crud/EditReducer';

const QUALIFIER = 'phishingDomain';

const load = (dto) => map(dto, new PhishingDomainState());

const state = new PhishingDomainState();
const reducer = reduce<PhishingDomainState>(new PhishingDomainState(QUALIFIER), load, QUALIFIER); 
export default reducer; 