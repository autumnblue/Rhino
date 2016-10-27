import { combineReducers } from 'redux'
import { CampaignPageState } from '../../model/state/CampaignState'
import { PagedDto } from '../../model/dto/PagedDto';
import { CampaignDto } from '../../model/dto/CampaignDto';
import { ViewType } from '../../model/state/page/ViewType';
import * as root from '../RootReducer';

const load = (dtos: PagedDto<CampaignDto>, state: CampaignPageState) => {
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

export const reducer = root.reducer<CampaignPageState>(load, defaultState);