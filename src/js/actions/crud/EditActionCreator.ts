import { CrupdateActionCreator } from './CrupdateActionCreator';
import { Service } from '../../service/Service';
import { CrupdateState } from '../../model/state/CrupdateState';
import { ActionType } from '../ActionType';
import { copy } from '../../common/Util';

export abstract class EditActionCreator<T extends Service> extends CrupdateActionCreator<T>{
    public submit(dispatch, state: CrupdateState): void {
        if(this.doLocalValidate(dispatch, state)) {
            this.remoteValidate(dispatch, state)
            .then(valid => {
                if(valid) {
                    this.update(dispatch, state);
                }    
            })
        }
    }

    public update(dispatch, state: CrupdateState): void {
        const dto = this.inputToDto(state.input);
        dto.id = state.id;
        this.getService()['update'](dto)
        .then(created => {
            dispatch({
                type: ActionType.CRUD_EDIT_SUCCESS,
                payload: created
            })
        })
        .catch(error => {
            const mapped = this.errorToState(error, state.input);
            state.input = mapped;
            dispatch({
                type: ActionType.CRUD_INVALID_SUBMIT,
                payload: copy<any>(state)
            });
        });
    }

    public remove(dispatch, id: number) {
        this.getService()
        ['delete'](id)
        .then(removed => 
            dispatch({
                type: ActionType.CRUD_REMOVE_SUCCESS,
                payload: id
            })
        );
    }


    public cancel(dispatch) {
        dispatch({
            type: ActionType.CRUD_CANCEL_EDIT
        })
    }
}
