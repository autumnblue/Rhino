import reduce from '../common';
import EmailTemplateState from '../../model/stateZ/emailTemplate/EmailTemplateState'
import EmailTemplateRecord from '../../model/stateZ/emailTemplate/EmailTemplateRecord'

export default reduce(new EmailTemplateState(), new EmailTemplateRecord());