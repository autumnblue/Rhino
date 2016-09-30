import { Reducer } from 'redux';
import { Action } from '../actions/Action';
import { ActionType } from '../actions/ActionType';
import { ICampaignService } from '../service/campaign/ICampaignService';
import * as factory from '../service/ServiceFactory';
import { ServiceType } from '../service/ServiceFactory';
import { CampaignState } from '../model/state/CampaignState';

//TODO: paging, etc
const readCampaignList = (): CampaignState[] => {
    return getService().readCampaignList()
    .map(dto => {
        return {
            id: dto.id,
            title: dto.title,
            description: dto.description,
            client: dto.client.name,
            link: `/clients/edit/${dto.client.id}`
        }    
    });
}

const getService = (): ICampaignService => {
    return factory.of<ICampaignService>(ServiceType.CAMPAIGN);
}

export const reducer: Reducer<CampaignState[]> = 
    (state: CampaignState[] = readCampaignList(), action: Action): CampaignState[] => {
        switch(action.type) {
            case ActionType.VIEW_CLIENT_LIST:
                state = readCampaignList();
                return state;

            default: return state;
        }
};