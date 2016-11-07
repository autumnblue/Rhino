import ClientState from '../../model/state/ClientState';
import { ClientDto } from '../../model/dto/ClientDto';

const map = (dto: ClientDto, state: ClientState): ClientState => ({
    id: dto.id,
    name: dto.name,
    url: dto.url,
    timezone: dto.default_time_zone.toString() 
})

export default map;