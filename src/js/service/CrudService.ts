import { Identity } from '../security/Identity';
import { Dto } from '../model/dto/Dto';
import { PagedDto } from '../model/dto/PagedDto';
import { Service } from './Service';
import * as http from './HttpUtil';

export abstract class CrudService<T extends Dto> extends Service {
    protected resource: string;

    constructor(resourceName: string) {
        super();
        this.resource = `${this.baseServiceUrl()}/v1/${resourceName}/`;
    }

    public async create(dto: T): Promise<T> {
        return http.post<T>
            (this.resource, dto);
    }

    public async read(): Promise<PagedDto<T>> {
        return http.get<PagedDto<T>>
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

    public async doCall(params: string): Promise<any> {
        return http.get<any>(`${this.resource}${params}`)
    }
}