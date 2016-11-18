import { CommitableDto } from './CommitableDto';

export interface EmailServerDto extends CommitableDto {
    use_tls: boolean
    test_recipient: string
    host: string
    port: number
    login: string
    password?: string
}