import PhishingDomainState from '../../model/state/PhishingDomainState'
import { PhishingDomainDto } from '../../model/dto/PhishingDomainDto';

const map = (dto: PhishingDomainDto, state: PhishingDomainState): PhishingDomainState => ({
    id: dto.id,
    domainName: dto.domain_name
})

export default map;