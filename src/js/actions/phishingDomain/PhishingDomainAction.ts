import { CrudActionCreator } from '../crud/CrudActionCreator'
import { IPhishingDomainService } from '../../service/phishingDomain/IPhishingDomainService';
import { ServiceType } from '../../service/ServiceFactory';

class ActionCreator extends CrudActionCreator<IPhishingDomainService> {
    constructor() {
        super(ServiceType.PHISHING_DOMAIN);
    }
}

export const PhishingDomainAction: ActionCreator = new ActionCreator();