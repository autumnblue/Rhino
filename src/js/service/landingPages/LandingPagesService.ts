import { ILandingPagesService } from './ILandingPagesService';
import LandingPageDto from '../../model/dto2/landingPage/LandingPageDto';
import { CrudService } from '../CrudService';
import * as http from '../HttpUtil';
import LandingPageXDto from '../../model/dto2/landingPage/LandingPageXDto';

class LandingPagesService extends CrudService<LandingPageDto> implements ILandingPagesService {
    constructor() {
        super('landing-pages');
    }

    public async read(): Promise<LandingPageXDto> {
        const url = 'https://sandbar-dev.rhino.lan/api/v1/landing-pages/?include[]=scraper_user_agent.*';
        return http.dynamicGetX<LandingPageXDto>(url);
    }
}

export default LandingPagesService;

