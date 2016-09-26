import { ClientService } from './client/ClientService';
import { MockClientService } from './client/MockClientService';

const isProd = (): boolean => {
    return process.env.NODE_ENV === 'PROD';    
}

export const of = <T>(type: ServiceType): T => {
    switch(type) {
        case ServiceType.CLIENT:
            return <T>(isProd() 
                ? new ClientService()
                : new MockClientService());
    }
}

export enum ServiceType {
    CLIENT
}