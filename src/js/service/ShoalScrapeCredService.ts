import CrudService from './CrudServiceZ';
import ShoalScrapeCredDto from '../model/dtoZ/shoalScrapeCred/ShoalScrapeCredDto';
import ShoalScrapeCredXDto from '../model/dtoZ/shoalScrapeCred/ShoalScrapeCredXDto';
import * as http from './HttpUtil';

class ShoalScrapeCredService extends CrudService<ShoalScrapeCredDto, any> {
    constructor() {
        super('shoalscrape-creds');
    }

    public async read(): Promise<ShoalScrapeCredXDto> {
        return http.get<ShoalScrapeCredXDto>
            (`${this.resource}?include[]=scraper_user_agent.*`);
    }

    public async getSuggestions(): Promise<{ shoalscrape_creds: ShoalScrapeCredDto[] }> {
        return http.get<{ shoalscrape_creds: ShoalScrapeCredDto[] }>
            (`${this.resource}?exclude[]=*&include[]=name&include[]=id`);
    }
}

export default ShoalScrapeCredService;