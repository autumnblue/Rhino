import RedirectPagesService from '../service/redirectPages/RedirectPagesService';
import RedirectPageXDto from '../model/dto2/redirectPage/RedirectPageXDto';
import RedirectPageMapper from '../mappers/RedirectPageMapper';
import RedirectPageForm from '../model/state2/redirectPage/RedirectPageForm';
import { ActionType } from './ActionType';

class RedirectPageActionCreator {
    public initPage(dispatch): void {
        const obj = new RedirectPageXDto();
        
        new RedirectPagesService().read()
        .then(fulfilled => {
            const state = RedirectPageMapper.toState(fulfilled);

            dispatch({
                type: ActionType.CRUD_INIT,
                payload: state,
            });
        });
    }

    public openEdit(dispatch, id: number, context?) {
        dispatch({
            type: ActionType.CRUD_OPEN_EDIT,
            payload: id,
            context
        });
    }

    public update(dispatch, values: RedirectPageForm, context?): Promise<any> {
        const dto = RedirectPageMapper.toDto(values)
        dto['commit'] = true;
        return new RedirectPagesService().update(dto)
        .then(updated => {

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
}

const RedirectPageAction: RedirectPageActionCreator = new RedirectPageActionCreator();
export default RedirectPageAction;