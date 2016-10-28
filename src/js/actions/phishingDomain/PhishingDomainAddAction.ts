import { AddActionCreator } from '../crud/AddActionCreator'
import { Action } from '../Action';
import { ActionType } from '../ActionType';
import { IPhishingDomainService } from '../../service/phishingDomain/IPhishingDomainService';
import { ServiceType } from '../../service/ServiceFactory';
import { AddState, Form } from '../../model/state/PhishingDomainState';
import { PhishingDomainDto } from '../../model/dto/PhishingDomainDto';
import { PhishingDomainFormValidation } from '../../validation/client/phishingDomain/PhishingDomainFormValidation';

class ActionCreator extends AddActionCreator<IPhishingDomainService> {
    constructor() {
        super(ServiceType.PHISHING_DOMAIN);
    }

    public changeDomainNameInput(dispatch, value: string) {
        dispatch({
            type: ActionType.PHISHING_DOMAIN_CHANGE_DOMAIN_NAME_INPUT,
            payload: value
        });
    }

    protected inputToDto(input: Form): PhishingDomainDto {
        return {
            domain_name: input.domainName.value,
            commit: true
        }
    }

    protected localValidate(state: AddState): AddState {
        return PhishingDomainFormValidation.validate(state);
    }
}

export const PhishingDomainAddAction: ActionCreator = new ActionCreator();