import { CrudActionCreator } from '../crud/CrudActionCreator'
import { IClientService } from '../../service/client/IClientService';
import { ServiceType } from '../../service/ServiceFactory';


class ActionCreator extends CrudActionCreator<IClientService> {
    constructor() {
        super(ServiceType.CLIENT);
    }
}

export const ClientAction: ActionCreator = new ActionCreator();