import RedirectPageForm from './RedirectPageForm';
import Dependee from '../Dependee';
import { ViewType } from '../../state/page/ViewType'; 

class RedirectPageState {
    forms: Array<RedirectPageForm>;

    mode = "ROOT" //TODO enum EDIT, ADD, ROOT
    view = ViewType.GRID

    dependencies: {
        scraperUserAgent: Dependee[],
    }

    selected: number = null;
}

export default RedirectPageState;