import LandingPageService from '../service/landingPages/LandingPagesService';
import LandingPageXDto from '../model/dto2/landingPage/LandingPageXDto';
import LandingPageMapper from '../mappers/LandingPageMapper';
import LandingPageForm from '../model/state2/landingPage/LandingPageForm';
import { ActionType } from './ActionType';

class LandingPageActionCreator {
    public initPage(dispatch): void {
        const obj = new LandingPageXDto();
        
        new LandingPageService().read()
        .then(fulfilled => {
            const state = LandingPageMapper.toState(fulfilled);

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

    public update(dispatch, values: LandingPageForm, context?): Promise<any> {
        const dto = LandingPageMapper.toDto(values)
        dto['commit'] = true;
        return new LandingPageService().update(dto)
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

    public remove(dispatch, id: number, context?) {
        new LandingPageService().delete(id)
        .then(removed => 
            dispatch({
                type: ActionType.CRUD_REMOVE_SUCCESS,
                payload: id,
                context
            })
        );
    }

    public openAdd(dispatch, context?): void {
        dispatch({
            type: ActionType.CRUD_OPEN_ADD,
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

const LandingPageAction: LandingPageActionCreator = new LandingPageActionCreator();
export default LandingPageAction;