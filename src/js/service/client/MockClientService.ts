import { Service } from '../Service';
import { IClientService } from './IClientService';
import { ClientDto } from '../../model/dto/ClientDto';

export class MockClientService extends Service implements IClientService {
    public readClientList(): ClientDto[] {
        return [
            {
                id: 1,
                name: 'Acme Corp',
                url: 'http://acme.com',
                timezone: 1000
            },
            {
                id: 2,
                name: 'Vakarian Arms',
                url: 'http://www.vakarian.com',
                timezone: 2000
            },
            {
                id: 3,
                name: 'Autofill',
                url: 'http://www.dau.com',
                timezone: 3000
            }
        ]
    }
}