import { ActionType } from '../ActionType';
import { CrupdateState } from '../../model/state/CrupdateState';
import { FormState } from '../../model/state/FormState';
import { Dto } from '../../model/dto/Dto';
import { Service } from '../../service/Service';
import { copy } from '../../common/Util';
import { ValidatableInput } from '../../common/validation/ValidatableInput';
import { MessageType } from '../../common/message/MessageType';
import { CrupdateActionCreator } from './CrupdateActionCreator';

export abstract class AddActionCreator<T extends Service> extends CrupdateActionCreator<T>{
    public submit(dispatch, state: CrupdateState): void {
        if(this.doLocalValidate(dispatch, state)) {
            this.remoteValidate(dispatch, state)
            .then(valid => {
                if(valid) {
                    this.create(dispatch, state);
                }    
            })
        }
    }

    public create(dispatch, state: CrupdateState): void {
        this.getService()['create'](this.inputToDto(state.input))
        .then(created => {
            dispatch({
                type: ActionType.CRUD_ADD_SUCCESS,
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

    public cancel(dispatch) {
        dispatch({
            type: ActionType.CRUD_CANCEL_ADD
        })
    }
}