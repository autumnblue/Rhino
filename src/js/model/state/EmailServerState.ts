import { ListState } from './page/ListState';

export type EmailServerPageState = ListState<EmailServer>; 

interface EmailServer {
    id?: number,
    login: string,
    host: string
}