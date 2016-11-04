import { ClientDto } from '../../model/dto/ClientDto';
import { Service } from '../Service';
import { PagedDto } from '../../model/dto/PagedDto';

export interface IClientService extends Service {
    create(dto: ClientDto): Promise<ClientDto>;
    read(): Promise<PagedDto<ClientDto>>;
    readSingle(id: number): Promise<ClientDto>;
    update(dto: ClientDto): Promise<ClientDto>;
    delete(id: number): Promise<void>;
}