import { Identity } from '../security/Identity';
import Dto from '../model/dtoZ/Dto';
import PagedDto from '../model/dtoZ/PagedDto';
import * as http from './HttpUtil';

abstract class CrudService<T extends Dto, U extends PagedDto> {
    protected resource: string;

    constructor(resourceName: string) {
        const base = Identity
            .Server
            .getBaseUrl();
        
        this.resource = `${base}/api/v1/${resourceName}/`;
    }

    public async create(dto: T): Promise<T> {
        return http.post<T>
            (this.resource, dto);
    }

    public async read(): Promise<U> {
        return http.get<U>
            (this.resource);
    }
    
    public async readSingle(id: number): Promise<T> {
        return http.get<T>
            (`${this.resource}${id}/`);
    }

    public async update(dto: T): Promise<T> {
        return http.put<T>
            (`${this.resource}${dto.id}/`, dto);
    }
    
    public async delete(id: number): Promise<void> {
        return http.del<void>
            (`${this.resource}${id}/`);
    }
}

export default CrudService;