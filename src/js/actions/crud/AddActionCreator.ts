import { Action } from '../Action';
import { ActionType } from '../ActionType';
import { CrupdateState } from '../../model/state/CrupdateState';
import { FormState } from '../../model/state/FormState';
import { Dto } from '../../model/dto/Dto';
import * as factory from '../../service/ServiceFactory';
import { ServiceType } from '../../service/ServiceFactory';
import { Service } from '../../service/Service';
import { copy } from '../../common/Util';
import { ValidatableInput } from '../../common/validation/ValidatableInput';
import { MessageType } from '../../common/message/MessageType';

export abstract class AddActionCreator<T extends Service /*, U extends Dto*/> {
    private service: T;
    private serviceType: ServiceType;

    constructor(serviceType: ServiceType) {
        this.serviceType = serviceType;
    }

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

    protected abstract inputToDto(obj: FormState): Dto;
    protected abstract errorToState(err: any, obj: FormState): FormState;

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

    protected abstract localValidate(state: CrupdateState): CrupdateState;

    private doLocalValidate(dispatch, state: CrupdateState): boolean {
        const validated = this.localValidate(state);
        const valid = validated.isValid;
        if(!valid) 
            dispatch({
                type: ActionType.CRUD_INVALID_SUBMIT,
                payload: validated
            });
        return valid;
    }

    private remoteValidate(dispatch, state: CrupdateState): Promise<boolean> {
        return Promise.resolve(true);
    }

    public cancel(dispatch) {
        dispatch({
            type: ActionType.CRUD_CANCEL_ADD
        })
    }

    private getService(): T {
        if(!this.service)
            this.service = factory.of<T>(this.serviceType); 
        
        return this.service;
    }
}