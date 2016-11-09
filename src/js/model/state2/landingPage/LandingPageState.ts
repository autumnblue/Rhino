import LandingPageForm from './LandingPageForm';
import Dependee from '../Dependee';
import { ViewType } from '../../state/page/ViewType'; 

class EngagementState {
    forms: Array<LandingPageForm>;

    mode = "ROOT" //TODO enum EDIT, ADD, ROOT
    view = ViewType.GRID

    dependencies: {
        scraperUserAgent: Dependee[],
    }

    selected: number = null;
}

export default EngagementState;