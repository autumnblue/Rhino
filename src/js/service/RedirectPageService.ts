import CrudService from './CrudServiceZ';
import RedirectPageDto from '../model/dtoZ/redirectPage/RedirectPageDto';
import RedirectPageXDto from '../model/dtoZ/redirectPage/RedirectPageXDto';
import * as http from './HttpUtil';

class RedirectPageService extends CrudService<RedirectPageDto, any> {
    constructor() {
        super('redirect-pages');
    }

    public async read(): Promise<RedirectPageXDto> {
        return http.get<RedirectPageXDto>
            (`${this.resource}?include[]=scraper_user_agent.*`);
    }

    public async getSuggestions(): Promise<{ landing_pages: RedirectPageDto[] }> {
        return http.get<{ landing_pages: RedirectPageDto[] }>
            (`${this.resource}?exclude[]=*&include[]=name&include[]=id`);
    }
}

export default RedirectPageService;