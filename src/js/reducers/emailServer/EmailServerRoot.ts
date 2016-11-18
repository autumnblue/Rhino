import EmailServerState from '../../model/state/EmailServerState'
import { PagedDto } from '../../model/dto/PagedDto';
import { ViewType } from '../../model/state/page/ViewType';
import reduce from '../crud/RootReducer';
import { ListState } from '../../model/state/page/ListState';
import map from './EmailServerMapper';
import { Dir } from '../../common/Constants';

const load = (dtos, state) => {
    state.list = dtos.results
        .map(dto => map(dto, new EmailServerState()))
    return state;
}

export const reducer = reduce<ListState<EmailServerState>>(load, { view: ViewType.GRID }, 'emailServer');
export default reducer;