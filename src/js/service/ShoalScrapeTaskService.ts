import CrudService from './CrudServiceZ';
import ShoalScrapeTaskDto from '../model/dtoZ/shoalScrapeTask/ShoalScrapeTaskDto';
import ShoalScrapeTaskXDto from '../model/dtoZ/shoalScrapeTask/ShoalScrapeTaskXDto';
import * as http from './HttpUtil';

class ShoalScrapeTaskService extends CrudService<ShoalScrapeTaskDto, any> {
    constructor() {
        super('shoalscrape-tasks');
    }

    public async read(): Promise<ShoalScrapeTaskXDto> {
        return http.get<ShoalScrapeTaskXDto>
            (`${this.resource}?include[]=shoalscrape_creds.*`);
    }
}

export default ShoalScrapeTaskService;