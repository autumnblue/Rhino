import { ILandingPagesService } from './ILandingPagesService';
import { LandingPagesDto } from '../../model/dto/LandingPagesDto';
import { CrudService } from '../CrudService';

export class LandingPagesService extends CrudService<LandingPagesDto> implements ILandingPagesService {
    constructor() {
        super('landing-pages');
    }
}