import EmailServerState from '../model/state2/emailServer/EmailServerState';
import EmailServerForm from '../model/state2/emailServer/EmailServerForm';
import EmailServerXDto from '../model/dto2/emailServer/EmailServerXDto';
import EmailServerDto from '../model/dto2/emailServer/EmailServerDto';
import Dependee from '../model/state2/Dependee';

class EmailServerMapperStatic {
    public toState = (dto: EmailServerXDto): EmailServerState => {
        const state = new EmailServerState();

        state.forms = dto.email_servers.map(emailServer => {

        return {
            id: emailServer.id,
            useTls: emailServer.use_tls,
            testRecipient: emailServer.test_recipient,
            host: emailServer.host,
            port: emailServer.port,
            login: emailServer.login,
            password: emailServer.password
        }});

        state.dependencies = {
            
        }

        //state.mode = 'ROOT';

        return state;
    }
    
    public toDto(form: EmailServerForm): EmailServerDto {
        return {
            "use_tls": form.useTls,
            "host": form.host,
            "login": form.login,
            "test_recipient": form.testRecipient,
            "password": form.password,
            "port": form.port,
            "id": form.id
        }
    }
}
const EmailServerMapper = new EmailServerMapperStatic();
export default EmailServerMapper;