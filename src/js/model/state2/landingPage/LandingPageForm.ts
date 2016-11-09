import Dependee from '../Dependee';

class LandingPageForm {
    status: number //TODO enum,
    name: string
    url: string
    isRedirectPage: boolean
    pageType: 'Scraped Page' | 'Manual'
    path: string
    scraperUserAgent: Dependee
    dateCreated: string
    id: number
}

export default LandingPageForm;