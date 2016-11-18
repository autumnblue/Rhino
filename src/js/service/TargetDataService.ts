import CrudService from './CrudServiceZ';
import TargetDataDto from '../model/dtoZ/targetData/TargetDataDto';
import TargetDataXDto from '../model/dtoZ/targetData/TargetDataXDto';
import * as http from './HttpUtil';

class TargetDataService extends CrudService<TargetDataDto, any> {
    constructor() {
        super('target-data');
    }

    public async read(): Promise<TargetDataXDto> {
        return http.get<TargetDataXDto>
            (`${this.resource}?include[]=target_list.*`);
    }
}

export default TargetDataService;