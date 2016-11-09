import ClientState from '../../model/state/ClientState'
import { PagedDto } from '../../model/dto/PagedDto';
import { ViewType } from '../../model/state/page/ViewType';
import reduce from '../crud/RootReducer';
import { ListState } from '../../model/state/page/ListState';
import { Dir } from '../../common/Constants';

const load = (dtos, state) => {
    return state;
}

export const reducer = reduce<ListState<ClientState>>(load, new ListState<ClientState>('clients'), 'clients');
export default reducer;