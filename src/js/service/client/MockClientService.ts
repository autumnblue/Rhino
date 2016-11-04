import { Service } from '../Service';
import { IClientService } from './IClientService';
import { ClientDto } from '../../model/dto/ClientDto';
import { PagedDto } from '../../model/dto/PagedDto';

export class MockClientService extends Service implements IClientService {
    public async create(dto: ClientDto): Promise<ClientDto> {
        return null;
    }

    public async read(): Promise<PagedDto<ClientDto>> {
        return null;
    }
    
    public async readSingle(id: number): Promise<ClientDto> {
        return null;
    }

    public async update(dto: ClientDto): Promise<ClientDto> {
        return null;
    }
    
    public async delete(id: number): Promise<void> {
        return null;
    }
}