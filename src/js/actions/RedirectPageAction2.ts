import ActionCreator from './ActionCreator';
import RedirectPageService from '../service/RedirectPageService';
import ScraperUserAgentService from '../service/ScraperUserAgentService';
import RedirectPageMapper from '../mappers/RedirectPageMapperZ';
import { ActionType } from './ActionType';
import Ref from '../model/stateZ/Ref';

class RedirectPageAction extends ActionCreator<RedirectPageService> {
    private static QUALIFIER = 'redirectPage';

    constructor() {
        super(RedirectPageService, RedirectPageMapper, RedirectPageAction.QUALIFIER)
    }

    public getTemplate(path: string): Promise<any> {
        return new RedirectPageService().getTemplate(path);
    }
}

export default new RedirectPageAction();