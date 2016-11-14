import CrudService from './CrudServiceZ';
import LandingPageDto from '../model/dtoZ/landingPage/LandingPageDto';
import * as http from './HttpUtil';

class LandingPageService extends CrudService<LandingPageDto, any> {
    constructor() {
        super('landing-pages');
    }

    public async getSuggestions(): Promise<{ landing_pages: LandingPageDto[] }> {
        return http.get<{ landing_pages: LandingPageDto[] }>
            (`${this.resource}?exclude[]=*&include[]=name&include[]=id`);
    }
}

export default LandingPageService;