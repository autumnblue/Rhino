import { UserService } from './user/UserService';
import { MockUserService } from './user/MockUserService';
import { ClientService } from './client/ClientService';
import { MockClientService } from './client/MockClientService';
import { CampaignService } from './campaign/CampaignService';
import { MockCampaignService } from './campaign/MockCampaignService';
import { Service } from './Service';

const isProd = (): boolean => {
    // return process.env.NODE_ENV === 'prod';
    return true;    
}

const isDev = (): boolean => {
    return process.env.NODE_ENV === 'dev'
}

export const of = <T extends Service>(type: ServiceType): T => {
    switch(type) {
        // case ServiceType.CAMPAIGN:
        //     return <T><Service>(isProd() 
        //         ? new CampaignService()
        //         : new MockCampaignService());

        case ServiceType.CLIENT:
            return isProd() || isDev()
                ? new (require('./client/ClientService'))
                    .ClientService()
                : new (require('./client/MockClientService'))
                    .MockClientService();
            
        case ServiceType.USER:
            return isProd() || isDev()
                ? new (require('./user/UserService'))
                    .UserService()
                : new (require('./user/MockUserService'))
                    .MockUserService();
            
        case ServiceType.IDENTITY:
            return isProd() || isDev()
                ? new (require('./identity/IdentityService'))
                    .IdentityService()
                : new (require('./identity/MockIdentityService'))
                    .MockIdentityService()
    }
}

export enum ServiceType {
    CLIENT,
    CAMPAIGN,
    USER,
    IDENTITY
}