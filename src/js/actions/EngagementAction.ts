import EngagementService from '../service/engagement/EngagementService';
import EngagementXDto from '../model/dto2/engagement/EngagementXDto';
import EngagementMapper from '../mappers/EngagementMapper';
import EngagementForm from '../model/state2/engagement/EngagementForm';
import { ActionType } from './ActionType';

class EngagementActionCreator {
    public initPage(dispatch): void {
        const obj = new EngagementXDto();
        
        new EngagementService().read()
        .then(fulfilled => {
            const state = EngagementMapper.toState(fulfilled);

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

    public update(dispatch, values: EngagementForm, context?): Promise<any> {
        const dto = EngagementMapper.toDto(values)
        dto['commit'] = true;
        return new EngagementService().update(dto)
        .then(updated => {
            console.log('********')
            console.log(updated);
            console.log('********')

        })
    }

    public openAdd(dispatch, context?): void {
        dispatch({
            type: ActionType.CRUD_OPEN_ADD,
            context
        });
    }

    public remove(dispatch, id: number, context?) {
        new EngagementService().delete(id)
        .then(removed => 
            dispatch({
                type: ActionType.CRUD_REMOVE_SUCCESS,
                payload: id,
                context
            })
        );
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

const EngagementAction: EngagementActionCreator = new EngagementActionCreator();
export default EngagementAction;