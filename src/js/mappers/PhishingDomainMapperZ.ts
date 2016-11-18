import Mapper from './MapperZ';
import PhishingDomainXDto from '../model/dtoZ/phishingDomain/PhishingDomainXDto';
import PhishingDomainDto from '../model/dtoZ/phishingDomain/PhishingDomainDto';
import PhishingDomainState from '../model/stateZ/phishingDomain/PhishingDomainState';
import PhishingDomainRecord from '../model/stateZ/phishingDomain/PhishingDomainRecord';

class PhishingDomainMapperStatic implements Mapper { 
    toState(result: PhishingDomainXDto): PhishingDomainState {
        const state = new PhishingDomainState();

        state.records = result.phishing_domains.map(dto => {             
            return {
                id: dto.id,
                domainName: dto.domain_name
            }
            
        });        

        return state;
    }

    toForm(dto: PhishingDomainDto) {
        return {
            id: dto.id,
            domainName: dto.domain_name
        }
    }

    toDto(state: PhishingDomainRecord): PhishingDomainDto {
        return {
            domain_name: state.domainName,
            commit: true,
            id: state.id            
        }
    }
}
const PhishingDomainMapper = new PhishingDomainMapperStatic();
export default PhishingDomainMapper;