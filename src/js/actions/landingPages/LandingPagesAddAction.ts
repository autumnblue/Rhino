import { AddActionCreator } from '../crud/AddActionCreator'
import { ActionType } from '../ActionType';
import { ILandingPagesService } from '../../service/landingPages/ILandingPagesService';
import { ServiceType } from '../../service/ServiceFactory';
import { AddState, Form } from '../../model/state/PhishingDomainState';
import { LandingPagesDto } from '../../model/dto/LandingPagesDto';
// import { PhishingDomainFormValidation } from '../../validation/client/phishingDomain/PhishingDomainFormValidation';

class ActionCreator extends AddActionCreator<ILandingPagesService> {
    constructor() {
        super(ServiceType.PHISHING_DOMAIN);
    }

    public changeDomainNameInput(dispatch, value: string) {
        dispatch({
            type: ActionType.PHISHING_DOMAIN_CHANGE_DOMAIN_NAME_INPUT,
            payload: value
        });
    }

    protected errorToState(error: any, obj: any) { return null };

    protected inputToDto(input: Form): LandingPagesDto {
        // return {
        //     domain_name: input.domainName.value,
        //     commit: true
        // }
        return null;
    }

    protected localValidate(state: AddState): AddState {
        return state;
    }
}

export const LandingPagesAddAction: ActionCreator = new ActionCreator();