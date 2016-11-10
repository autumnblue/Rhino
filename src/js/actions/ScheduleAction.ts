import ScheduleService from '../service/schedule/ScheduleService';
import ScheduleMapper from '../mappers/ScheduleMapper';
import ScheduleForm from '../model/state2/schedule/ScheduleForm';
import { ActionType } from './ActionType';

class ScheduleActionCreator {
    public initPage(dispatch): void {       
        new ScheduleService().read()
        .then(fulfilled => {
            const state = ScheduleMapper.toState(fulfilled);

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
        new ScheduleService().delete(id)
        .then(removed => 
            dispatch({
                type: ActionType.CRUD_REMOVE_SUCCESS,
                payload: id,
                context
            })
        );
    }

    public update(dispatch, values: ScheduleForm, context?): Promise<any> {
        const dto = ScheduleMapper.toDto(values)
        dto['commit'] = true;
        return new ScheduleService().update(dto)
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

    public create(dispatch, values: ScheduleForm, context?): Promise<any> {
        const dto = ScheduleMapper.toDto(values);
        dto['commit'] = true;
        return new ScheduleService().create(dto)
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

const ScheduleAction: ScheduleActionCreator = new ScheduleActionCreator();
export default ScheduleAction;