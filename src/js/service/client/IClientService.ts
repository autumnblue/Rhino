import { ClientDto } from '../../model/dto/ClientDto';
import { Service } from '../Service';
import { PagedDto } from '../../model/dto/PagedDto';

export interface IClientService extends Service {
    createClient(dto: ClientDto): Promise<ClientDto>;
    readClients(): Promise<PagedDto<ClientDto>>;
    readSingleClient(id: number): Promise<ClientDto>;
    updateClient(dto: ClientDto): Promise<ClientDto>;
    deleteClient(id: number): Promise<void>;
}