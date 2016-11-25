import * as http from './HttpUtil';
import { Identity } from '../security/Identity';

class PreviewService {
    public async previewEmail(id: number): Promise<any> {
        return http.get2<any>
            (`${Identity.Server.getBaseUrl()}/api/v1/vector-emails/${id}/email-preview`);
    }

    public async previewLandingPage(id: number): Promise<any> {
        return http.get2<any>
            (`${Identity.Server.getBaseUrl()}/api/v1/landing-pages/preview/${id}`);
    }
}

export default PreviewService;