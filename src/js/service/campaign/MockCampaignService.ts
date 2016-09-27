import { ICampaignService } from './ICampaignService';
import { CampaignDto } from '../../model/dto/CampaignDto';

export class MockCampaignService implements ICampaignService {
    public readCampaignList(): CampaignDto[] {
        return [
            {
                id: 1,
                title: '10k employees',
                description: '',
                client: {
                    id: 1,
                    name: 'Acme Corp'
                }
            },
            {
                id: 2,
                title: 'MISC',
                description: 'Test autofill sensitivity against URL manipulation',
                client: {
                    id: 3,
                    name: 'Autofill'
                }
            }
        ]
    }
}