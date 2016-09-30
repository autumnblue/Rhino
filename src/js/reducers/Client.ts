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
    // return getService().readClientList()
    // .map(dto => {
    //     return {
    //         id: dto.id,
    //         name: dto.name,
    //         url: dto.url,
    //         timezone: dto.timezone
    //     }    
    // });
    return null;
}

const getService = (): IClientService => {
    return factory.of<IClientService>(ServiceType.CLIENT);
}

export const reducer: Reducer<ClientState[]> = 
    (state: ClientState[] = readClientList(), action: Action): ClientState[] => {
        switch(action.type) {
            case ActionType.VIEW_CLIENT_LIST:
                state = readClientList();
                return state;

            

            default: return state;
        }
};