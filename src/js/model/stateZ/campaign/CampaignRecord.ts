import Record from '../Record';
import Ref from '../Ref';

class CampaignRecord implements Record {
    url: string
    client = new Ref();
    name: string
    description: string
    id: number
}

export default CampaignRecord