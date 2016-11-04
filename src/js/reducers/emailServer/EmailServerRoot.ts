import { combineReducers } from 'redux'
import { EmailServerPageState } from '../../model/state/EmailServerState'
import { PagedDto } from '../../model/dto/PagedDto';
import { EmailServerDto } from '../../model/dto/EmailServerDto';
import { ViewType } from '../../model/state/page/ViewType';
import * as root from '../RootReducer';

const load = (dtos: PagedDto<EmailServerDto>, state: EmailServerPageState) => {
    state.list = dtos.results.map(dto => {
        return {
            id: dto.id,
            login: dto.login,
            host: dto.host,
        }
    });
    return state;
}

const defaultState = () => {
    return  { view: ViewType.GRID }
}

export const reducer = root.reducer<EmailServerPageState>(load, defaultState);