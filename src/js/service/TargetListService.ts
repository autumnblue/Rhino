import CrudService from './CrudServiceZ';
import TargetListDto from '../model/dtoZ/targetList/TargetListDto';
import TargetListXDto from '../model/dtoZ/targetList/TargetListXDto';
import * as http from './HttpUtil';

class TargetListsService extends CrudService<TargetListDto, any> {
    constructor() {
        super('target-lists');
    }

    public async read(): Promise<TargetListXDto> {
        return http.get<TargetListXDto>
            (`${this.resource}?include[]=target.*`);
    }

    public async getSuggestions(): Promise<{ target_lists: TargetListDto[] }> {
        return http.get<{ target_lists: TargetListDto[] }>
            (`${this.resource}?exclude[]=*&include[]=nickname&include[]=id`);
    }
}

export default TargetListsService;