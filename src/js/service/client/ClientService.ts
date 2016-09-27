import { IClientService } from './IClientService';
import { ClientDto } from '../../model/dto/ClientDto';

export class ClientService implements IClientService {
    public readClientList(): ClientDto[] {
        return;
    }
}