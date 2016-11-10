import EmailTemplateService from '../service/emailTemplate/EmailTemplateService';
import EmailTemplateMapper from '../mappers/EmailTemplateMapper';
import EmailTemplateForm from '../model/state2/emailTemplate/EmailTemplateForm';
import { ActionType } from './ActionType';

class EmailTemplateActionCreator {
    public initPage(dispatch): void {       
        new EmailTemplateService().read()
        .then(fulfilled => {
            const state = EmailTemplateMapper.toState(fulfilled);

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

    public remove(dispatch, id: number, context?) {
        new EmailTemplateService().delete(id)
        .then(removed => 
            dispatch({
                type: ActionType.CRUD_REMOVE_SUCCESS,
                payload: id,
                context
            })
        );
    }

    public openEdit(dispatch, id: number, context?) {
        dispatch({
            type: ActionType.CRUD_OPEN_EDIT,
            payload: id,
            context
        });
    }

    public update(dispatch, values: EmailTemplateForm, context?): Promise<any> {
        const dto = EmailTemplateMapper.toDto(values)
        dto['commit'] = true;
        return new EmailTemplateService().update(dto)
        .then(updated => {
            console.log('********')
            console.log(updated);
            console.log('********')
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

    public create(dispatch, values: EmailTemplateForm, context?): Promise<any> {
        const dto = EmailTemplateMapper.toDto(values);
        dto['commit'] = true;
        return new EmailTemplateService().create(dto)
        .then(created => {
            console.log('********')
            console.log(created);
            console.log('********')

            // dispatch({
            //     type: ActionType.CRUD_ADD_SUCCESS,
            //     payload: state,
            //     context
            // })
        })
        .catch(response => {
            // return handleErr(response, map);
        })
    }
}

const EmailTemplateAction: EmailTemplateActionCreator = new EmailTemplateActionCreator();
export default EmailTemplateAction;