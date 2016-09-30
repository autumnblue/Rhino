export interface ClientState {
    read: Client | Client[],
    input: any
}

interface Client {
    id: number,
    name: string,
    url: string,
    timezone: any
}

