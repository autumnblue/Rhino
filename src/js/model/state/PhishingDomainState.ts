import { ListState } from './page/ListState';

export type PhishingDomainPageState = ListState<PhishingDomain>; 

interface PhishingDomain {
    id?: number,
    domainName: string
}