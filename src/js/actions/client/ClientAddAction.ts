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

    public changeNameInput(dispatch, value: string) {
        dispatch({
            type: ActionType.CLIENT_CHANGE_NAME_INPUT,
            payload: value
        });
    }

    public changeUrlInput(dispatch, value: string) {
        dispatch({
        type: ActionType.CLIENT_CHANGE_URL_INPUT,
            payload: value
        });
    }

    public selectTimezone(dispatch, value: string) {
        dispatch({
        type: ActionType.CLIENT_SELECT_TIMEZONE,
            payload: value
        });
    }

    protected inputToDto(obj: AddFields): ClientDto {
        return {
            name: obj.name.value,
            url: obj.url.value,
            default_time_zone: obj.timezone.value
        }
    }

    protected localValidate(state: ClientAddState): ClientAddState {
        return ClientFormValidation.validate(state);
    }
}

export const ClientAddAction: ActionCreator = new ActionCreator();