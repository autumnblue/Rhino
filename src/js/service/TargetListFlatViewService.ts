import CrudService from './CrudServiceZ';
import TargetListFlatViewDto from '../model/dto/targetListFlatView/TargetListFlatViewDto';
import * as http from './HttpUtil';

class TargetListsFlatViewService extends CrudService<TargetListFlatViewDto, any> {
    constructor() {
        super('target-lists-flat-view');
    }

    public async read(): Promise<{ results: TargetListFlatViewDto[] }> {
        return http.get<any>
            (`${this.resource}?per_page=60`);
    }
}

export default TargetListsFlatViewService;