import ActionCreator from './ActionCreator';
import OAuthResultService from '../service/OAuthResultService';
import OAuthResultMapper from '../mappers/OAuthResultMapperZ';
import { ActionType } from './ActionType';
import Ref from '../model/stateZ/Ref';

class OAuthResultAction extends ActionCreator<OAuthResultService> {
    private static QUALIFIER = 'oAuthResult';

    constructor() {
        super(OAuthResultService, OAuthResultMapper, OAuthResultAction.QUALIFIER)
    }
}

export default new OAuthResultAction();