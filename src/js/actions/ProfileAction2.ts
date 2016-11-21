import ActionCreator from './ActionCreator';
import ProfileService from '../service/ProfileService';
import ProfileMapper from '../mappers/ProfileMapperZ';
import { ActionType } from './ActionType';
import Ref from '../model/stateZ/Ref';

class ProfileAction extends ActionCreator<ProfileService> {
    private static QUALIFIER = 'profile';

    constructor() {
        super(ProfileService, ProfileMapper, ProfileAction.QUALIFIER)
    }
}

export default new ProfileAction();