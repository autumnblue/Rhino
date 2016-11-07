import PhishingDomainState from '../../model/state/PhishingDomainState'
import { PagedDto } from '../../model/dto/PagedDto';
import { ViewType } from '../../model/state/page/ViewType';
import reduce from '../crud/RootReducer';
import { ListState } from '../../model/state/page/ListState';
import map from './PhishingDomainMapper';
import { Dir } from '../../common/Constants';

const load = (dtos, state) => {
    state.list = dtos.results
        .map(dto => map(dto, new PhishingDomainState()))
    return state;
}

export const reducer = reduce<ListState<PhishingDomainState>>(load, { view: ViewType.GRID }, 'phishingDomain');
export default reducer;