import { AddActionCreator } from '../crud/AddActionCreator'
import { Action } from '../Action';
import { ActionType } from '../ActionType';
import { IClientService } from '../../service/client/IClientService';
import { ServiceType } from '../../service/ServiceFactory';
import { ClientAddState, AddFields } from '../../model/state/ClientState';
import { ClientDto } from '../../model/dto/ClientDto';
import { ClientFormValidation } from '../../validation/client/client/ClientFormValidation';

class ActionCreator extends AddActionCreator<IClientService> {
    constructor() {
        super(ServiceType.CLIENT);
    }

    protected inputToDto(obj: AddFields): ClientDto {
        return {
            name: obj.name.value,
            url: obj.url.value,
            timezone: obj.timezone.value
        }
    }

    protected localValidate(state: ClientAddState): ClientAddState {
        return ClientFormValidation.validate(state);
    }
}

export const ClientAddAction: ActionCreator = new ActionCreator();