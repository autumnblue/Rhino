import ActionCreator from './ActionCreator';
import LandingPageService from '../service/LandingPageService';
import ScraperUserAgentService from '../service/ScraperUserAgentService';
import LandingPageMapper from '../mappers/LandingPageMapperZ';
import { ActionType } from './ActionType';
import Ref from '../model/stateZ/Ref';

class LandingPageAction extends ActionCreator<LandingPageService> {
    private static QUALIFIER = 'landingPage';

    constructor() {
        super(LandingPageService, LandingPageMapper, LandingPageAction.QUALIFIER)
    }

    public getScraperUserAgentSuggestions(dispatch): void {
        dispatch({
            type: ActionType.SCRAPER_USER_AGENT_SUGGESTIONS_LOADING,
            context: LandingPageAction.QUALIFIER
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
                context: LandingPageAction.QUALIFIER
            });
        })
    }

    public getTemplate(path: string): Promise<any> {
        return new LandingPageService().getTemplate(path);
    }

    // public openEditor(dispatch): void {
    //     dispatch({
    //         type: ActionType.OPEN_EDITOR,
    //         context: LandingPageAction.QUALIFIER
    //     });
    // }

    public okEditor(dispatch, raw: string): void {
        dispatch({
            type: ActionType.EDITOR_OK,
            payload: raw,
            context: LandingPageAction.QUALIFIER
        }); 
    }

    // public cancelEditor(dispatch): void {
    //     dispatch({
    //         type: ActionType.EDITOR_CANCEL,
    //         context: LandingPageAction.QUALIFIER
    //     }); 
    // }
}

export default new LandingPageAction();