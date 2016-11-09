import EngagementForm from './EngagementForm';
import Dependee from '../Dependee';
import { ViewType } from '../../state/page/ViewType'; 

class EngagementState {
    forms: Array<EngagementForm>;

    mode = "ROOT" //TODO enum EDIT, ADD, ROOT
    view = ViewType.GRID

    dependencies: {
        landingPages: Dependee[],
        phishingDomains: Dependee[],
        campaigns: Dependee[],
        emailTemplates: Dependee[],
        schedules: Dependee[],
        redirectPages: Dependee[],
        emailServers: Dependee[]
    }

    selected: number = null;
}

export default EngagementState;