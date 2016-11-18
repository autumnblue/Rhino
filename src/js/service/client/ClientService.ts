import { Service } from '../Service';
import { IClientService } from './IClientService';
import { ClientDto } from '../../model/dto/ClientDto';
import { CrudService } from '../CrudService';
import { PagedDto } from '../../model/dto/PagedDto';
import * as http from '../HttpUtil';
import handleErr from '../../validation/submit/landingPages/LandingPagesFormSubmitValidator'; 

export class ClientService extends CrudService<ClientDto> implements IClientService {
    private url: string;

    constructor() {
        super('clients');
        // this.url = `${this.baseServiceUrl()}/v1/clients/`;
    }

    // public async create(dto: ClientDto): Promise<ClientDto> {
    //     return http.post<ClientDto>(this.url, dto);
    // }

    // public async read(): Promise<PagedDto<ClientDto>> {
    //     return http.get<PagedDto<ClientDto>>
    //         (this.url);
    // }
    
    // public async readSingle(id: number): Promise<ClientDto> {
    //     return http.get<ClientDto>
    //         (`${this.url}${id}/`);
    // }

    // public async update(dto: ClientDto): Promise<ClientDto> {
    //     return http.put<ClientDto>
    //         (`${this.url}${dto.id}/`, dto);
    // }
    
    // public async delete(id: number): Promise<void> {
    //     return http.del<void>
    //         (`${this.url}${id}/`);
    // }
}