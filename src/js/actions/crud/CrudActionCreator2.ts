import { ActionType } from '../ActionType';
import * as factory from '../../service/ServiceFactory';
import { ServiceType } from '../../service/ServiceFactory';
import { Service } from '../../service/Service';
import CrudState from '../../model/state/CrudState';
import { Dto } from '../../model/dto/Dto';

export abstract class CrudActionCreator2<T extends Service> {
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

     public create(dispatch, state: CrudState): void {
        this.getService()['create'](this.mapToDto(state))
        .then(created => {
            dispatch({
                type: ActionType.CRUD_ADD_SUCCESS,
                payload: created
            })
        })
    }

    public update(dispatch, state: CrudState): void {
        const dto = this.mapToDto(state);
        dto.id = state.id;
        this.getService()['update'](dto)
        .then(created => {
            dispatch({
                type: ActionType.CRUD_EDIT_SUCCESS,
                payload: created
            })
        })
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
            type: ActionType.CRUD_CANCEL_ADD
        })
    }

    protected abstract mapToDto(obj: CrudState): Dto;

    private getService(): T {
        if(!this.service)
            this.service = factory.of<T>(this.serviceType); 
        
        return this.service;
    }
}