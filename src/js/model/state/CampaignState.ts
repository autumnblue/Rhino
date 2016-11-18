import CrudState from './CrudState';

class CampaignPagesState extends CrudState {
    constructor(context?) {
        super(context);
    }

    id: number = null
    name = ''
    description = ''
    client: Campaign_client
    campaign_clients?: Campaign_client[]
}

interface Campaign_client {
    id:number;
    name: string;
}

export default CampaignPagesState ;