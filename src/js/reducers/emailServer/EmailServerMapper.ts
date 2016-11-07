import EmailServerState from '../../model/state/EmailServerState'
import { EmailServerDto } from '../../model/dto/EmailServerDto';

const map = (dto: EmailServerDto, state: EmailServerState): EmailServerState => ({
    id: dto.id,
    useTls: dto.use_tls,
    testRecipient: dto.test_recipient,
    host: dto.host,
    port: dto.port,
    login: dto.login,
    password: dto.password
})

export default map;