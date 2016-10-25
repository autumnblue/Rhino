import { Service } from '../Service';
import { IClientService } from './IClientService';
import { ClientDto } from '../../model/dto/ClientDto';
import { PagedDto } from '../../model/dto/PagedDto';

export class MockClientService extends Service implements IClientService {
    public async createClient(dto: ClientDto): Promise<ClientDto> {
        return null;
    }

    public async readClients(): Promise<PagedDto<ClientDto>> {
        return null;
    }
    
    public async readSingleClient(id: number): Promise<ClientDto> {
        return null;
    }

    public async updateClient(dto: ClientDto): Promise<ClientDto> {
        return null;
    }
    
    public async deleteClient(id: number): Promise<void> {
        return null;
    }
}