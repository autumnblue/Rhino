import CrudService from './CrudServiceZ';
import ResultEventDto from '../model/dtoZ/resultEvent/ResultEventDto';
import * as http from './HttpUtil';

class ResultEventService extends CrudService<ResultEventDto, any> {
    constructor() {
        super('result-events');
    }

    public async getSuggestions(): Promise<{ result_events: ResultEventDto[] }> {
        return http.get<{ result_events: ResultEventDto[] }>
            (`${this.resource}?exclude[]=*&include[]=timestamp&include[]=id`);
    }
}

export default ResultEventService;