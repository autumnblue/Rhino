import { combineReducers } from 'redux'
import { PageState } from '../../model/state/PhishingDomainState'
import { PagedDto } from '../../model/dto/PagedDto';
import { PhishingDomainDto } from '../../model/dto/PhishingDomainDto';
import { ViewType } from '../../model/state/page/ViewType';
import * as root from '../RootReducer';

const load = (dtos: PagedDto<PhishingDomainDto>, state: PageState) => {
    state.list = dtos.results.map(dto => {
        return {
            id: dto.id,
            domainName: dto.domain_name
        }
    });
    return state;
}

const defaultState = () => {
    return  { view: ViewType.GRID }
}

export const reducer = root.reducer<PageState>(load, defaultState);