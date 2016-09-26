import { ClientDto } from '../../model/dto/ClientDto';

export interface IClientService {
    readClientList(): ClientDto[];
}