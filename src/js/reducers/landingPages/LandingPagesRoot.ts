import LandingPagesState from '../../model/state/LandingPagesState'
import { PagedDto } from '../../model/dto/PagedDto';
import { LandingPagesDto } from '../../model/dto/LandingPagesDto';
import { ViewType } from '../../model/state/page/ViewType';
import reduce from '../crud/RootReducer';
import { ListState } from '../../model/state/page/ListState';
import map from './LandingPagesMapper';
import { Dir } from '../../common/Constants';

const load = (dtos, state) => {
    state.list = dtos.results
        .map(dto => map(dto, new LandingPagesState()))
    return state;
}

const qualified = window.location.href.endsWith(Dir.LANDING_PAGES)

export const reducer = reduce<ListState<LandingPagesState>>(load, { view: ViewType.GRID }, 'landingPages');
export default reducer;