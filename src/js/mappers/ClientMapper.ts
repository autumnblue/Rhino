import ClientState from '../model/state/ClientState';
import { ListState } from '../model/state/page/ListState';
import { ClientDto } from '../model/dto/ClientDto';
import Mapper from './Mapper';

class ClientMapperStatic implements Mapper {
    public toState = (dto: ClientDto): ClientState => {
        if(dto['client']) dto = dto['client']; //normalize from response
        
        return {
            id: dto.id,
            name: dto.name,
            url: dto.url,
            timezone: dto.default_time_zone.toString()
        } 
    }

    public toStates = (dtos: any): ClientState[] => {
        return dtos.clients
            .map(dto => this.toState(dto));
    }

    public toDto = (state: ClientState): ClientDto => ({
        name: state.name, 
        url: state.url,
        default_time_zone: state.timezone
    })
}
const ClientMapper = new ClientMapperStatic();
export default ClientMapper;