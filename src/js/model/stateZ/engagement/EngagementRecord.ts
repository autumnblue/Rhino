import Record from '../Record';
import Ref from '../Ref';

class EngagementRecord implements Record {
    name: string;
    description: string;
    landingPage: Ref = new Ref();
    phishingDomain: Ref = new Ref();
    campaign: Ref = new Ref();
    emailTemplate: Ref = new Ref();
    schedule: Ref = new Ref();
    redirectPage: Ref = new Ref();
    emailServer: Ref = new Ref();
    state: number;
    path: string;
    id: number;
}

export default EngagementRecord;