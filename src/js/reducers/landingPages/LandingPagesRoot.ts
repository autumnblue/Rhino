import { combineReducers } from 'redux'
import LandingPagesState from '../../model/state/LandingPagesState'
import { PagedDto } from '../../model/dto/PagedDto';
import { LandingPagesDto } from '../../model/dto/LandingPagesDto';
import { ViewType } from '../../model/state/page/ViewType';
import reduce from '../crud/RootReducer2';
import { ListState } from '../../model/state/page/ListState';

const load = (dtos: PagedDto<LandingPagesDto>, state: ListState<LandingPagesState>) => {
    state.list = dtos.results.map(dto => {
        return {
            id: dto.id,
            name: dto.name,
            url: dto.url,
            path: dto.path,
            status: dto.status.toString(),
            pageType: dto.page_type,
            scraperUserAgent: dto.scraper_user_agent.toString(),
            dateCreated: dto.date_created
        }
    });
    return state;
}

export const reducer = reduce<ListState<LandingPagesState>>(load, { view: ViewType.GRID });