import { ClientDto } from '../../model/dto/ClientDto';
import { Service } from '../Service';

export interface IClientService extends Service {
    readClientList(): ClientDto[];
}