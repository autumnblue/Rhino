import { Reducer } from 'redux';
import { AppState } from '../model/state/AppState';
import { Action } from '../actions/Action';
import { ActionType } from '../actions/ActionType';
import { IClientService } from '../service/client/IClientService';
import * as factory from '../service/ServiceFactory';
import { ServiceType } from '../service/ServiceFactory';
import { ClientState } from '../model/state/ClientState';

//TODO: paging, etc
const readClientList = (): ClientState[] => {
    return getService().readClientList()
    .map(dto => {
        return <ClientState>{
            id: dto.id,
            name: dto.name,
            url: dto.url,
            timezone: dto.timezone
        }    
    });
}

const getService = (): IClientService => {
    return factory.of<IClientService>(ServiceType.CLIENT);
}

const reducer: Reducer<AppState> = (state: AppState, action: Action): AppState => {
    switch(action.type) {
        case ActionType.VIEW_CLIENT_LIST:
            state.clients = readClientList();
            return state;

        default: return state;
    }
};

export default reducer;