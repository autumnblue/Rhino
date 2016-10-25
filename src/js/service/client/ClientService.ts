import { Service } from '../Service';
import { IClientService } from './IClientService';
import { ClientDto } from '../../model/dto/ClientDto';
import { PagedDto } from '../../model/dto/PagedDto';
import * as http from '../HttpUtil';

export class ClientService extends Service implements IClientService {
    private url: string;

    constructor() {
        super();
        this.url = `${this.baseServiceUrl()}/v1/clients/`;
    }

    public async createClient(dto: ClientDto): Promise<ClientDto> {
        return http.post<ClientDto>
            (this.url, dto);
    }

    public async readClients(): Promise<PagedDto<ClientDto>> {
        return http.get<PagedDto<ClientDto>>
            (this.url);
    }
    
    public async readSingleClient(id: number): Promise<ClientDto> {
        return http.get<ClientDto>
            (`${this.url}${id}/`);
    }

    public async updateClient(dto: ClientDto): Promise<ClientDto> {
        return http.put<ClientDto>
            (`${this.url}${dto.id}/`, dto);
    }
    
    public async deleteClient(id: number): Promise<void> {
        return http.del<void>
            (`${this.url}${id}/`);
    }
}