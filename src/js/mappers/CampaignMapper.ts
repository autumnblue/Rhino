import CampaignState from '../model/state/CampaignState';
import { ListState } from '../model/state/page/ListState';
import { CampaignDto } from '../model/dto/CampaignDto';
import Mapper from './Mapper';

class CampaignMapperStatic implements Mapper {
    public toState = (dto: CampaignDto): CampaignState => {
        if(dto['campaign']) dto = dto['campaign']; //normalize from response

        return {
            id: dto.id,
            name: dto.name,
            description: dto.description,
            client: dto.client,
            campaign_clients: dto.campaign_clients
        } 
    }

    public toStates = (dtos: any): CampaignState[] => {
        return dtos
            .map(dto => this.toState(dto));
    }

    public toDto = (state: CampaignState): CampaignDto => ({
        name: state.name, 
        description: state.description,
        client: state.client //.id
    })
}
const ClientMapper = new CampaignMapperStatic();
export default ClientMapper;