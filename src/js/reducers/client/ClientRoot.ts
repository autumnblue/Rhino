import { Reducer } from 'redux';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { ClientPageState } from '../../model/state/ClientState';
import { ViewType } from '../../model/state/page/ViewType';
import { PagedDto } from '../../model/dto/PagedDto';
import { ClientDto } from '../../model/dto/ClientDto';
import { copy } from '../../common/Util';
import { ValidatableInput } from '../../common/validation/ValidatableInput';

const defaultListState: ClientPageState = {
    view: ViewType.GRID
}

const loadClients = (dtos: PagedDto<ClientDto>, state: ClientPageState): ClientPageState => {
    state.list = dtos.results.map(dto => {
        return {
            id: dto.id,
            name: dto.name,
            url: dto.url,
            timezone: dto.default_time_zone 
        }
    });

    return state;
}

//local add for successful CREATE
const pushUser = (dto: ClientDto, state: ClientPageState) => {
    state.list.push({
        id: dto.id,
        name: dto.name,
        url: dto.url,
        timezone: dto.default_time_zone 
    });

    return state;
}

export const reducer: Reducer<ClientPageState> = (state: ClientPageState = defaultListState, action: Action): ClientPageState => {
    //TODO: short curcuit if not on page
    
    switch(action.type) {
        case ActionType.CRUD_INIT:
            return loadClients(action.payload, 
                copy<ClientPageState>(state));

        case ActionType.CRUD_TOGGLE_VIEW:
            state.view = state.view == ViewType.TABLE
                ? ViewType.GRID
                : ViewType.TABLE
            return copy<ClientPageState>(state);

        case ActionType.CRUD_ADD_SUCCESS:
            return pushUser(action.payload,
                copy<ClientPageState>(state));

        default: return state;
    }
};
