import { combineReducers } from 'redux'
import CampaignState from '../../model/state/CampaignState'
import { PagedDto } from '../../model/dto/PagedDto';
import { CampaignDto } from '../../model/dto/CampaignDto';
import { ViewType } from '../../model/state/page/ViewType';
import reduce from '../crud/RootReducer';
import { ListState } from '../../model/state/page/ListState';
import { Dir } from '../../common/Constants';

const load = (dtos: PagedDto<CampaignDto>, state: ListState<CampaignState>) => {
    state.list = dtos.results.map(dto => {
        return {
            id: dto.id,
            name: dto.name,
            description: dto.description,
            client: ''
        }
    });
    return state;
}

const defaultState = () => {
    return  { view: ViewType.GRID }
}

const reducer = reduce<ListState<CampaignState>>(load, { view: ViewType.GRID }, 'campaign');
export default reducer;