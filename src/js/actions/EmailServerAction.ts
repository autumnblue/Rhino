import EmailServerService from '../service/emailServer/EmailServerService';
import EmailServerMapper from '../mappers/EmailServerMapper';
import EmailServerForm from '../model/state2/emailServer/EmailServerForm';
import { ActionType } from './ActionType';

class EmailServerActionCreator {
    public initPage(dispatch): void {       
        new EmailServerService().read()
        .then(fulfilled => {
            const state = EmailServerMapper.toState(fulfilled);

            dispatch({
                type: ActionType.CRUD_INIT,
                payload: state,
            });
        });
    }

    public openAdd(dispatch, context?): void {
        dispatch({
            type: ActionType.CRUD_OPEN_ADD,
            context
        });
    }

    public openEdit(dispatch, id: number, context?) {
        dispatch({
            type: ActionType.CRUD_OPEN_EDIT,
            payload: id,
            context
        });
    }

    public remove(dispatch, id: number, context?) {
        new EmailServerService().delete(id)
        .then(removed => 
            dispatch({
                type: ActionType.CRUD_REMOVE_SUCCESS,
                payload: id,
                context
            })
        );
    }

    public update(dispatch, values: EmailServerForm, context?): Promise<any> {
        const dto = EmailServerMapper.toDto(values)
        dto['commit'] = true;
        return new EmailServerService().update(dto)
        .then(updated => {
            dispatch({
                type: ActionType.CRUD_EDIT_SUCCESS,
                payload: null,
                context
            })
        })
    }

    public toggleView(dispatch, context?) {
        dispatch({  
            type: ActionType.CRUD_TOGGLE_VIEW,
            context
        });
    }

    public cancel(dispatch, context?) {
        dispatch({
            type: ActionType.CRUD_CANCEL,
            context
        })
    }

    public create(dispatch, values: EmailServerForm, context?): Promise<any> {
        const dto = EmailServerMapper.toDto(values);
        dto['commit'] = true;
        return new EmailServerService().create(dto)
        .then(created => {
            dispatch({
                type: ActionType.CRUD_ADD_SUCCESS,
                payload: null,
                context
            })
        })
    }
}

const EmailServerAction: EmailServerActionCreator = new EmailServerActionCreator();
export default EmailServerAction;