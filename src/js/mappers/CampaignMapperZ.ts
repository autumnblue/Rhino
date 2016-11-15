import Mapper from './MapperZ';
import CampaignXDto from '../model/dtoZ/campaign/CampaignXDto';
import CampaignDto from '../model/dtoZ/campaign/CampaignDto';
import CampaignState from '../model/stateZ/campaign/CampaignState';
import CampaignRecord from '../model/stateZ/campaign/CampaignRecord';
import { 
    refClient
} from './common/AssemblyUtil';

class CampaignMapperStatic implements Mapper { 
    toState(result: CampaignXDto): CampaignState {
        const state = new CampaignState();

        state.records = result.campaigns.map(dto => {             
            return {
                client: refClient(dto, result.clients),
                url: dto.url,
                name: dto.name,
                description: dto.description,
                id: dto.id
            }
            
        });        

        return state;
    }

    toForm(dto: CampaignDto) {
        return {
            client: dto.client,
            url: dto.url,
            name: dto.name,
            description: dto.description,
            id: dto.id
        }
    }

    toDto(state: CampaignRecord): CampaignDto {
        return {
            "url": state.url,
            "client": state.client && state.client.id,
            "description": state.description,
            "name": state.name,
            commit: true,
            id: state.id            
        }
    }
}
const CampaignMapper = new CampaignMapperStatic();
export default CampaignMapper;