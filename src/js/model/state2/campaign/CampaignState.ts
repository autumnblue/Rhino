import CampaignForm from './CampaignForm';
import Dependee from '../Dependee';
import { ViewType } from '../../state/page/ViewType'; 

class CampaignState {
    forms: Array<CampaignForm>;

    mode = "ROOT" //TODO enum EDIT, ADD, ROOT
    view = ViewType.GRID

    dependencies: {
        clients: Dependee[],
    }

    selected: number = null;
    context: string = 'campaign';
}

export default CampaignState;