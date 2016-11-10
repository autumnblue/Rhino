import { ICampaignService } from './ICampaignService';
import { CampaignDto } from '../../model/dto/CampaignDto';
import { CrudService } from '../CrudService';
import { PagedDto } from '../../model/dto/PagedDto';
import * as factory from '../ServiceFactory';
import { ServiceType } from '../ServiceFactory';
import * as http from '../HttpUtil';
import CampaignXDto from '../../model/dto2/campaign/CampaignXDto';

class CampaignService extends CrudService<CampaignDto> implements ICampaignService {
    constructor() {
        super('campaigns');
    }

    // public async read(): Promise<any> {
    //     return http.get<PagedDto<CampaignDto>>
    //         (this.resource)
    //     .then(dtos => {
    //          return http.dynamicGet('clients', 'name')
    //          .then(results => {  
    //             return (<any[]>dtos['campaigns']).map(campaign => {
    //                 const id = campaign.client;
    //                 campaign.client = results.filter(result => result['id'] == id)[0];
    //                 return campaign;
    //             })
    //          });
    //     });
    // }

    public async read(): Promise<CampaignXDto> {
        const url = 'https://sandbar-dev.rhino.lan/api/v1/campaigns/?include[]=client.*';
        return http.dynamicGetX<CampaignXDto>(url);
    }

    public async readSingle(id: number): Promise<any> {
        return http.get<any>
            (`${this.resource}${id}/`)
        .then(dto => {
             return http.dynamicGet('clients', 'name')
             .then(results => {
                const campaign = dto.campaign;   
                const id = campaign.client;
                campaign.client = results.filter(result => result['id'] == id)[0];
                campaign.campaign_clients = results.map(result => result['name']);
                return campaign;
             });
        });
    }

    private fulfill(objs: any[], key: string) {
       const needed = [needs('clients', 'name')]

       needed.forEach(need => {
           http.dynamicGet(need.resource, need.identifier)
           .then(result => {
               objs.filter(obj => obj['id'])[0]
               result[need.identifier]
           })
       });        
    }
}

interface PreciseResponse {
    id: number,
    identifier: string
}

interface Dependee {
    resource: string
    identifier: string
}

const needs = (resource: string, identifier: string): Dependee => {
    return { resource: resource, identifier: identifier }
}

export default CampaignService;
//clients, names to be put in pla