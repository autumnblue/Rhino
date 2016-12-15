import CrudService from './CrudServiceZ';
import TargetListFlatViewDto from '../model/dto/targetListFlatView/TargetListFlatViewDto';
import * as http from './HttpUtil';

class TargetListsFlatViewService extends CrudService<TargetListFlatViewDto, any> {
    constructor() {
        super('target-lists-flat-view');
    }

    public async read(): Promise<{ target_lists: TargetListFlatViewDto[] }> {
        return http.get<any>
            (`${this.base}/api/v2/target-lists-flat-view/?per_page=60`);
    }

    public async update(dto): Promise<any> {
        return http.patch<any>
            (`${this.resource}${dto.id}/`, dto);
    }
}

export default TargetListsFlatViewService;