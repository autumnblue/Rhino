import Dependee from '../Dependee';

class EngagementForm {
    id: number = null
    name = ''
    description = ''
    landingPage: Dependee = null
    phishingDomain: Dependee = null
    campaign: Dependee = null
    emailTemplate: Dependee = null
    schedule: Dependee = null
    redirectPage: Dependee = null
    emailServer: Dependee = null
    state: number = null //TODO enum
    path = ''
}

export default EngagementForm;