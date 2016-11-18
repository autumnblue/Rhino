import { IRedirectPagesService } from './IRedirectPagesService';
import RedirectPageDto from '../../model/dto2/redirectPage/RedirectPageDto';
import { CrudService } from '../CrudService';
import * as http from '../HttpUtil';
import RedirectPageXDto from '../../model/dto2/redirectPage/RedirectPageXDto';

class RedirectPagesService extends CrudService<RedirectPageDto> implements IRedirectPagesService {
    constructor() {
        super('redirect-pages');
    }

    public async read(): Promise<RedirectPageXDto> {
        const url = 'https://sandbar-dev.rhino.lan/api/v1/redirect-pages/?include[]=scraper_user_agent.*';
        return http.dynamicGetX<RedirectPageXDto>(url);
    }
}

export default RedirectPagesService;

