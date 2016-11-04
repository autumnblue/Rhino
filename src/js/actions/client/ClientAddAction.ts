import { AddActionCreator } from '../crud/AddActionCreator'
import { Action } from '../Action';
import { ActionType } from '../ActionType';
import { IClientService } from '../../service/client/IClientService';
import { ServiceType } from '../../service/ServiceFactory';
import { AddState, Form } from '../../model/state/ClientState';
import { ClientDto } from '../../model/dto/ClientDto';
import { ClientFormValidation } from '../../validation/client/client/ClientFormValidation';
import { map400 } from '../../validation/ValidationUtil';

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

    protected inputToDto(obj: Form): ClientDto {
        return {
            name: obj.name.value,
            url: obj.url.value,
            default_time_zone: obj.timezone.value
        }
    }

    protected errorToState(err: ClientDto, obj: Form): Form {
        map400(err.name, obj.name);
        map400(err.url, obj.url);
        map400(err.default_time_zone, obj.timezone);

        return obj;
    }

    protected localValidate(state: AddState): AddState {
        return ClientFormValidation.validate(state);
    }
}

export const ClientAddAction: ActionCreator = new ActionCreator();

