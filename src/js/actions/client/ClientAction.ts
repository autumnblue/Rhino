import CrudActionCreator from '../crud/CrudActionCreator'
import { IClientService } from '../../service/client/IClientService';
import { ServiceType } from '../../service/ServiceFactory';
import State from '../../model/state/ClientState';
import { ClientDto } from '../../model/dto/ClientDto';

class ActionCreator extends CrudActionCreator<IClientService> {
    constructor() {
        super(ServiceType.CLIENT);
    }

    protected mapToDto(obj: State): ClientDto {
        return {
            name: obj.name, 
            url: obj.url,
            default_time_zone: null
        }
    }
}

const ClientAction: ActionCreator = new ActionCreator();
export default ClientAction;