import ScheduleState from '../../model/state/ScheduleState'
import { PagedDto } from '../../model/dto/PagedDto';
import { ViewType } from '../../model/state/page/ViewType';
import reduce from '../crud/RootReducer';
import { ListState } from '../../model/state/page/ListState';
import map from './ScheduleMapper';
import { Dir } from '../../common/Constants';

const load = (dtos, state) => {
    state.list = dtos.results
        .map(dto => map(dto, new ScheduleState()))
    return state;
}

export const reducer = reduce<ListState<ScheduleState>>(load, { view: ViewType.GRID }, 'schedule');
export default reducer;