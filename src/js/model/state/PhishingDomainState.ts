import CrudState from './CrudState';

class PhishingDomainState extends CrudState {
    constructor(context?) {
        super(context);
    }

    id: number = null
    domainName = ''
}

export default PhishingDomainState;