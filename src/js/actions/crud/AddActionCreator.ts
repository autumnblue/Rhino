import { Action } from '../Action';
import { ActionType } from '../ActionType';
import { AddState } from '../../model/state/AddState';
import { FieldState } from '../../model/state/FieldState';
import { Dto } from '../../model/dto/Dto';
import * as factory from '../../service/ServiceFactory';
import { ServiceType } from '../../service/ServiceFactory';
import { Service } from '../../service/Service';

export abstract class AddActionCreator<T extends Service /*, U extends Dto*/> {
    private service: T;
    private serviceType: ServiceType;

    constructor(serviceType: ServiceType) {
        this.serviceType = serviceType;
    }

    public submit(dispatch, state: AddState): void {
        if(this.doLocalValidate(dispatch, state)) {
            this.remoteValidate(dispatch, state)
            .then(valid => {
                if(valid) {
                    this.create(dispatch, state.input);
                }    
            })
        }
    }

    protected abstract inputToDto(obj: FieldState): Dto;

    public create(dispatch, obj: FieldState): void {
        this.getService()['create'](this.inputToDto(obj))
        .then(created => {
            dispatch({
                type: ActionType.CRUD_ADD_SUCCESS,
                payload: created
            })
        });
    }

    protected abstract localValidate(state: AddState): AddState;

    private doLocalValidate(dispatch, state: AddState): boolean {
        const validated = this.localValidate(state);
        const valid = validated.isValid;
        if(!valid) 
            dispatch({
                type: ActionType.CRUD_INVALID_SUBMIT,
                payload: validated
            });
        return valid;
    }

    private remoteValidate(dispatch, state: AddState): Promise<boolean> {
        return Promise.resolve(true);
    }

    public cancel(dispatch) {
        dispatch({
            type: ActionType.CRUD_CANCEL_ADD
        })
    }

    protected getService(): T {
        if(!this.service)
            this.service = factory.of<T>(this.serviceType); 
        
        return this.service;
    }
}