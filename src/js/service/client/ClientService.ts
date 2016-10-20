import { Service } from '../Service';
import { IClientService } from './IClientService';
import { ClientDto } from '../../model/dto/ClientDto';

export class ClientService extends Service implements IClientService {
    public readClientList(): ClientDto[] {
        return;
    }
}