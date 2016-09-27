import { ClientService } from './client/ClientService';
import { MockClientService } from './client/MockClientService';
import { CampaignService } from './campaign/CampaignService';
import { MockCampaignService } from './campaign/MockCampaignService';
import { Service } from './Service';

const isProd = (): boolean => {
    return process.env.NODE_ENV === 'PROD';    
}

export const of = <T extends Service>(type: ServiceType): T => {
    switch(type) {
        case ServiceType.CLIENT:
            return <T><Service>(isProd() 
                ? new ClientService()
                : new MockClientService());
        
        case ServiceType.CAMPAIGN:
            return <T><Service>(isProd() 
                ? new CampaignService()
                : new MockCampaignService());
    }
}

export enum ServiceType {
    CLIENT,
    CAMPAIGN
}