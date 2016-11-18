import { IEngagementService } from './IEngagementService';
import { EngagementDto } from '../../model/dto/EngagementDto';
import { CrudService } from '../CrudService';
import * as http from '../HttpUtil';
import EngagementXDto from '../../model/dto2/engagement/EngagementXDto';

class EngagementService extends CrudService<EngagementDto> implements IEngagementService {
    constructor() {
        super('engagements');
    }

    public async read(): Promise<EngagementXDto> {
        const url = 'https://sandbar-dev.rhino.lan/api/v1/engagements/?include[]=landing_page.*&include[]=domain.*&include[]=campaign.*&include[]=email_template.*&include=interval.*&include[]=redirect_page.*&';
        return http.dynamicGetX<EngagementXDto>(url);
    }
}

export default EngagementService;

