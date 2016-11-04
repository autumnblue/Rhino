import { IEngagementService } from './IEngagementService';
import { EngagementDto } from '../../model/dto/EngagementDto';
import { CrudService } from '../CrudService';

export class EngagementService extends CrudService<EngagementDto> implements IEngagementService {
    constructor() {
        super('engagement');
    }
}