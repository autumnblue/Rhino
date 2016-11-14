import CrudService from './CrudServiceZ';
import RedirectPageDto from '../model/dtoZ/landingPage/LandingPageDto';
import * as http from './HttpUtil';

class RedirectPageService extends CrudService<RedirectPageDto, any> {
    constructor() {
        super('redirect-pages');
    }

    public async getSuggestions(): Promise<{ landing_pages: RedirectPageDto[] }> {
        return http.get<{ landing_pages: RedirectPageDto[] }>
            (`${this.resource}?exclude[]=*&include[]=name&include[]=id`);
    }
}

export default RedirectPageService;