import Dependee from '../Dependee';

class RedirectPageForm {
    status: number //TODO enum,
    name: string
    url: string
    isRedirectPage: boolean
    pageType: 'URL' | 'Scraped Page' | 'Manual'
    path: string
    scraperUserAgent: Dependee
    dateCreated: string
    id: number
    source: string
}

export default RedirectPageForm;