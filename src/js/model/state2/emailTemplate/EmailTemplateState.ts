import EmailTemplateForm from './EmailTemplateForm';
import { ViewType } from '../../state/page/ViewType'; 

class EmailTemplateState {
    forms: Array<EmailTemplateForm>;

    mode = "ROOT" //TODO enum EDIT, ADD, ROOT
    view = ViewType.GRID

    dependencies: { }

    selected: number = null;
    context: string = 'emailTemplate';
}

export default EmailTemplateState;