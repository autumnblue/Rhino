import PhishingDomainState from '../../model/state/PhishingDomainState';
import map from './PhishingDomainMapper';
import reduce from '../crud/EditReducer';

const load = (dto) => map(dto, new PhishingDomainState());

const state = new PhishingDomainState();
const reducer = reduce<PhishingDomainState>(state, load, 'phishingDomain'); 
export default reducer; 