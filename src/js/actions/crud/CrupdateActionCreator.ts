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

export abstract class CrupdateActionCreator<T extends Service /*, U extends Dto*/> {
    private service: T;
    private serviceType: ServiceType;

    constructor(serviceType: ServiceType) {
        this.serviceType = serviceType;
    }

    public abstract submit(dispatch, state: CrupdateState): void;

    protected abstract inputToDto(obj: FormState): Dto;
    protected abstract errorToState(err: any, obj: FormState): FormState;
    protected abstract localValidate(state: CrupdateState): CrupdateState;

    protected doLocalValidate(dispatch, state: CrupdateState): boolean {
        const validated = this.localValidate(state);
        const valid = validated.isValid;
        if(!valid) 
            dispatch({
                type: ActionType.CRUD_INVALID_SUBMIT,
                payload: validated
            });
        return valid;
    }

    protected remoteValidate(dispatch, state: CrupdateState): Promise<boolean> {
        return Promise.resolve(true);
    }

    public abstract cancel(dispatch);

    protected getService(): T {
        if(!this.service)
            this.service = factory.of<T>(this.serviceType); 
        
        return this.service;
    }
}