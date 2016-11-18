import ActionCreator from './ActionCreator';
import OAuthConsumerService from '../service/OAuthConsumerService';
import OAuthConsumerMapper from '../mappers/OAuthConsumerMapperZ';
import { ActionType } from './ActionType';
import Ref from '../model/stateZ/Ref';

class OAuthConsumerAction extends ActionCreator<OAuthConsumerService> {
    private static QUALIFIER = 'oAuthConsumer';

    constructor() {
        super(OAuthConsumerService, OAuthConsumerMapper, OAuthConsumerAction.QUALIFIER)
    }
}

export default new OAuthConsumerAction();