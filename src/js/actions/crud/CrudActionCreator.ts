import { Action } from '../Action';
import { ActionType } from '../ActionType';
import * as factory from '../../service/ServiceFactory';
import { ServiceType } from '../../service/ServiceFactory';
import { Service } from '../../service/Service';

export abstract class CrudActionCreator<T extends Service> {
    private service: T;
    private serviceType: ServiceType;

    constructor(serviceType: ServiceType) {
        this.serviceType = serviceType;
    }

    public initPage(dispatch): void {
        this.getService()
        ['read']()
        .then(dtos => dispatch({
            type: ActionType.CRUD_INIT,
            payload: dtos
        }));
    }

    public openAdd(dispatch): void {
        dispatch({
            type: ActionType.CRUD_OPEN_ADD
        });
    }

    public openEdit(dispatch, id: number) {
        this.getService()
        ['readSingle'](id)
        .then(dto => {
            dispatch({
                type: ActionType.CRUD_OPEN_EDIT,
                payload: dto
            });
        })
    }

    public toggleView(dispatch) {
        dispatch({
            type: ActionType.CRUD_TOGGLE_VIEW
        });
    }

    private getService(): T {
        if(!this.service)
            this.service = factory.of<T>(this.serviceType); 
        
        return this.service;
    }
}