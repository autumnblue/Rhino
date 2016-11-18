import CrudActionCreator from '../crud/CrudActionCreator'
import { IPhishingDomainService } from '../../service/phishingDomain/IPhishingDomainService';
import { ServiceType } from '../../service/ServiceFactory';
import State from '../../model/state/PhishingDomainState';
import { PhishingDomainDto } from '../../model/dto/PhishingDomainDto';

class ActionCreator extends CrudActionCreator<IPhishingDomainService> {
    constructor() {
        super(ServiceType.PHISHING_DOMAIN);
    }

    protected mapToDto(obj: State): PhishingDomainDto {
        return {
            domain_name: obj.domainName
        }
    }
}

const PhishingDomainAction: ActionCreator = new ActionCreator();
export default PhishingDomainAction;