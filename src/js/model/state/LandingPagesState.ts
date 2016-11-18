import CrudState from './CrudState';

class LandingPagesState implements CrudState {
    id = null
    name = ''
    url = ''
    path = ''
    status = ''
    pageType = ''
    scraperUserAgent = ''
    dateCreated = ''
}

export default LandingPagesState;