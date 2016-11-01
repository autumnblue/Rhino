import { combineReducers } from 'redux'
import { PageState } from '../../model/state/LandingPagesState'
import { PagedDto } from '../../model/dto/PagedDto';
import { LandingPagesDto } from '../../model/dto/LandingPagesDto';
import { ViewType } from '../../model/state/page/ViewType';
import * as root from '../RootReducer';

const load = (dtos: PagedDto<LandingPagesDto>, state: PageState) => {
    state.list = dtos.results.map(dto => {
        return {
            id: dto.id,
            name: dto.name,
            url: dto.url,
            path: dto.path,
            status: dto.status,
            pageType: dto.page_type,
            scraperUserAgent: dto.scraper_user_agent,
            dateCreated: dto.date_created
        }
    });
    return state;
}

const defaultState = () => {
    return  { view: ViewType.GRID }
}

export const reducer = root.reducer<PageState>(load, defaultState);