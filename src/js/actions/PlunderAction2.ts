import ActionCreator from './ActionCreator';
import PlunderService from '../service/PlunderService';
import PlunderMapper from '../mappers/PlunderMapperZ';
import { ActionType } from './ActionType';
import Ref from '../model/stateZ/Ref';

class PlunderAction extends ActionCreator<PlunderService> {
    private static QUALIFIER = 'plunder';

    constructor() {
        super(PlunderService, PlunderMapper, PlunderAction.QUALIFIER)
    }
}

export default new PlunderAction();