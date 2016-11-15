import reduce from '../common';
import PhishingDomainState from '../../model/stateZ/phishingDomain/PhishingDomainState'
import PhishingDomainRecord from '../../model/stateZ/phishingDomain/PhishingDomainRecord'

export default reduce(new PhishingDomainState(), new PhishingDomainRecord());