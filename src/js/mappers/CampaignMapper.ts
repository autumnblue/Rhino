import CampaignState from '../model/state2/campaign/CampaignState';
import CampaignForm from '../model/state2/campaign/CampaignForm';
import CampaignXDto from '../model/dto2/campaign/CampaignXDto';
import CampaignDto from '../model/dto2/campaign/CampaignDto';
import Dependee from '../model/state2/Dependee';

class CampaignMapperStatic {
    public toState = (dto: CampaignXDto): CampaignState => {
        const state = new CampaignState();

        state.forms = dto.campaigns.map(campaign => {
            let client
                = dto.clients
                && dto.clients.filter(obj => obj.id == campaign.client)[0];
          
        return {
            url: campaign.url,
            client: client && { id: client.id, label: client.name },
            name: campaign.name,
            description: campaign.description,
            id: campaign.id
        }});

        state.dependencies = {
            clients:
                dto.clients 
                && dto.clients
                    .map(obj => ({ id: obj.id, label: obj.name })),    
        }

        //state.mode = 'ROOT';

        return state;
    }
    
    public toDto(form: CampaignForm): CampaignDto {
        return {
            "url": form.url,
            "client": form.client && form.client.id,
            "description": form.description,
            "name": form.name,
            "id": form.id
        }
    }
}
const CampaignMapper = new CampaignMapperStatic();
export default CampaignMapper;