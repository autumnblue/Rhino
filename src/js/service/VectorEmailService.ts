import CrudService from './CrudServiceZ';
import VectorEmailDto from '../model/dtoZ/vectorEmail/VectorEmailDto';
import VectorEmailXDto from '../model/dtoZ/vectorEmail/VectorEmailXDto';
import * as http from './HttpUtil';

class VectorEmailService extends CrudService<VectorEmailDto, any> {
    constructor() {
        super('vector-emails');
    }

    public async read(): Promise<VectorEmailXDto> {
        return http.get<VectorEmailXDto>
            (`${this.resource}?include[]=target.*&include[]=engagement.*&include[]=result_event.*`);
    }
}

export default VectorEmailService;