import ActionCreator from './ActionCreator';
import ShoalScrapeTaskService from '../service/ShoalScrapeTaskService';
import ShoalScrapeCredService from '../service/ShoalScrapeCredService';
import ShoalScrapeTaskMapper from '../mappers/ShoalScrapeTaskMapperZ';
import { ActionType } from './ActionType';
import Ref from '../model/stateZ/Ref';

class ShoalScrapeTaskAction extends ActionCreator<ShoalScrapeTaskService> {
    private static QUALIFIER = 'shoalScrapeTask';

    constructor() {
        super(ShoalScrapeTaskService, ShoalScrapeTaskMapper, ShoalScrapeTaskAction.QUALIFIER)
    }

    public getShoalScrapeCredSuggestions(dispatch): void {
        dispatch({
            type: ActionType.SHOAL_SCRAPE_CRED_SUGGESTIONS_LOADING,
            context: ShoalScrapeTaskAction.QUALIFIER
        });

        new ShoalScrapeCredService()
        .getSuggestions()
        .then(suggestions => {
            const mapped: Ref[] = suggestions.shoal_scrape_creds.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))

            dispatch({
                type: ActionType.SHOAL_SCRAPE_CRED_SUGGESTIONS_POPULATED,
                payload: mapped,
                context: ShoalScrapeTaskAction.QUALIFIER
            });
        })
    }
}

export default new ShoalScrapeTaskAction();