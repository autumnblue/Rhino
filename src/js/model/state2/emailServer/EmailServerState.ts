import EmailServerForm from './EmailServerForm';
import { ViewType } from '../../state/page/ViewType'; 

class EmailServerState {
    forms: Array<EmailServerForm>;

    mode = "ROOT" //TODO enum EDIT, ADD, ROOT
    view = ViewType.GRID

    dependencies: { }

    selected: number = null;
    context: string = 'emailServer';
}

export default EmailServerState;