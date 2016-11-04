import { combineReducers } from 'redux'
import { PageState } from '../../model/state/ScheduleState'
import { PagedDto } from '../../model/dto/PagedDto';
import { ScheduleDto } from '../../model/dto/ScheduleDto';
import { ViewType } from '../../model/state/page/ViewType';
import * as root from '../RootReducer';

const load = (dtos: PagedDto<ScheduleDto>, state: PageState) => {
    state.list = dtos.results.map(dto => {
        return {
            id: dto.id,
            name: dto.name
        }
    });
    return state;
}

const defaultState = () => {
    return  { view: ViewType.GRID }
}

export const reducer = root.reducer<PageState>(load, defaultState);