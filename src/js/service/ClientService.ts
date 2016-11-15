import CrudService from './CrudServiceZ';
import ClientDto from '../model/dtoZ/client/ClientDto';
import * as http from './HttpUtil';

class ClientService extends CrudService<ClientDto, any> {
    constructor() {
        super('clients');
    }

    public async getSuggestions(): Promise<{ clients: ClientDto[] }> {
        return http.get<{ clients: ClientDto[] }>
            (`${this.resource}?exclude[]=*&include[]=name&include[]=id`);
    }
}

export default ClientService;