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

    public getScraperUserAgentSuggestions(dispatch): void {
        dispatch({
            type: ActionType.SCRAPER_USER_AGENT_SUGGESTIONS_LOADING,
            context: RedirectPageAction.QUALIFIER
        });

        new ScraperUserAgentService()
        .getSuggestions()
        .then(suggestions => {
            const mapped: Ref[] = suggestions.scraper_user_agents.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))

            dispatch({
                type: ActionType.SCRAPER_USER_AGENT_SUGGESTIONS_POPULATED,
                payload: mapped,
                context: RedirectPageAction.QUALIFIER
            });
        })
    }

    public openEditor(dispatch): void {
        dispatch({
            type: ActionType.OPEN_EDITOR,
            context: RedirectPageAction.QUALIFIER
        });
    }
}

export default new RedirectPageAction();