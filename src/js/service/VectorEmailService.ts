import CrudService from './CrudServiceZ';
import VectorEmailDto from '../model/dto/vectorEmail/VectorEmailDto';
import VectorEmailXDto from '../model/dto/vectorEmail/VectorEmailXDto';
import * as http from './HttpUtil';

class VectorEmailService extends CrudService<VectorEmailDto, any> {
    constructor() {
        super('vector-emails');
    }

    public async read(): Promise<VectorEmailXDto> {
        return http.get<VectorEmailXDto>
            (`${this.resource}?include[]=target.*&include[]=engagement.*&include[]=result_event.*`);
    }

    public async getVectorEmailForEngagement(engagementId: number): Promise<{ id: number }> {
        return http.get<{ vector_emails: { id: number}[] }>
            (`${this.resource}?exclude[]=*&include[]=id&filter{engagement}=${engagementId}`)
            .then(result => {
                return result.vector_emails[0];
            });            
    }
}

export default VectorEmailService;