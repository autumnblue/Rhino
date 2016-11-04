import { EditActionCreator } from '../crud/EditActionCreator'
import { ActionType } from '../ActionType';
import { IClientService } from '../../service/client/IClientService';
import { ServiceType } from '../../service/ServiceFactory';
import { EditState, Form } from '../../model/state/ClientState';
import { ClientDto } from '../../model/dto/ClientDto';
import { ClientFormValidation } from '../../validation/client/client/ClientFormValidation';

class ActionCreator extends EditActionCreator<IClientService> {
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

    protected errorToState(error: any, obj: any) { return null };

     protected inputToDto(obj: Form): ClientDto {
        return {
            name: obj.name.value,
            url: obj.url.value,
            default_time_zone: obj.timezone.value
        }
    }

    protected localValidate(state: EditState): EditState {
        return ClientFormValidation.validate(state);
    }
}

export const ClientEditAction: ActionCreator = new ActionCreator();