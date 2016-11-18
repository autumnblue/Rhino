import PhishingDomainState from '../model/state/PhishingDomainState';
import { ListState } from '../model/state/page/ListState';
import { PhishingDomainDto } from '../model/dto/PhishingDomainDto';
import Mapper from './Mapper';

class PhishingDomainMapperStatic implements Mapper {
    public toState = (dto: PhishingDomainDto): PhishingDomainState => {
        if(dto['phishing_domain']) dto = dto['phishing_domain']; //normalize from response
        
        return {
            id: dto.id,
            domainName: dto.domain_name
        } 
    }

    public toStates = (dtos: any): PhishingDomainState[] => {
        return dtos.phishing_domains
            .map(dto => this.toState(dto));
    }

    public toDto = (state: PhishingDomainState): PhishingDomainDto => ({
        domain_name: state.domainName
    })
}
const PhishingDomainMapper = new PhishingDomainMapperStatic();
export default PhishingDomainMapper;