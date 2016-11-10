import EmailTemplateState from '../model/state2/emailTemplate/EmailTemplateState';
import EmailTemplateForm from '../model/state2/emailTemplate/EmailTemplateForm';
import EmailTemplateXDto from '../model/dto2/emailTemplate/EmailTemplateXDto';
import EmailTemplateDto from '../model/dto2/emailTemplate/EmailTemplateDto';
import Dependee from '../model/state2/Dependee';

class EmailTemplateMapperStatic {
    public toState = (dto: EmailTemplateXDto): EmailTemplateState => {
        const state = new EmailTemplateState();

        state.forms = dto.email_templates.map(emailTemplate => {

        return {
            id: emailTemplate.id,
            fromHeader: emailTemplate.from_header,
            name: emailTemplate.name,
            subjectHeader: emailTemplate.subject_header,
            template: emailTemplate.template
        }});

        state.dependencies = {
            
        }

        //state.mode = 'ROOT';

        return state;
    }
    
    public toDto(form: EmailTemplateForm): EmailTemplateDto {
        return {
            "subject_header": form.subjectHeader,
            "from_header": form.fromHeader,
            "id": form.id,
            "template": form.template,
            "name": form.name
        }
    }
}
const EmailTemplateMapper = new EmailTemplateMapperStatic();
export default EmailTemplateMapper;