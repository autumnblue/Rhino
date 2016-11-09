import { Service } from '../Service';

export interface IRedirectPagesService extends Service {
    create(dto: any): Promise<any>;
    read(): Promise<any>;
    readSingle(id: number): Promise<any>;
    update(dto: any): Promise<any>;
    delete(id: number): Promise<void>;
}