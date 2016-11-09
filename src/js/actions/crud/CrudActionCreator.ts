import { ActionType } from '../ActionType';
import * as factory from '../../service/ServiceFactory';
import mapperFactory from '../../mappers/MapperFactory';
import Mapper from '../../mappers/Mapper';
import { ServiceType } from '../../service/ServiceFactory';
import { Service } from '../../service/Service';
import CrudState from '../../model/state/CrudState';
import { Dto } from '../../model/dto/Dto';
import handleErr from '../../validation/submit/SubmitValidationHandler';

abstract class CrudActionCreator<T extends Service> {
    private service: T;
    private serviceType: ServiceType;
    private mapper: Mapper;

    constructor(serviceType: ServiceType) {
        this.serviceType = serviceType;
    }

    public initPage(dispatch, context?): void {
        this.getService()
        ['read']()
        .then(dtos => {
            const map = this.getMapper();
            const states = map.toStates(dtos);

            dispatch({           
                type: ActionType.CRUD_INIT,
                payload: states,
                context
            })
        });
    }

    public openAdd(dispatch, context?): void {
        dispatch({
            type: ActionType.CRUD_OPEN_ADD,
            context
        });
    }

    public openEdit(dispatch, id: number, context?) {
        this.getService()
        ['readSingle'](id)
        .then(dto => {
            const map = this.getMapper();
            const state = map.toState(dto);
            dispatch({
                type: ActionType.CRUD_OPEN_EDIT,
                payload: state,
                context
            });
        })
    }

    public toggleView(dispatch, context?) {
        dispatch({
            type: ActionType.CRUD_TOGGLE_VIEW,
            context
        });
    }

     public create(dispatch, state: any, context?): Promise<any> {
        const map = this.getMapper();
        const mapped = map.toDto(state)
        mapped.commit = true; 
        return this.getService()['create'](mapped)
        .then(created => {
            const state = map.toState(created);

            dispatch({
                type: ActionType.CRUD_ADD_SUCCESS,
                payload: state,
                context
            })
        })
        .catch(response => {
            return handleErr(response, map);
        })
    }

    public update(dispatch, state: CrudState, context?): Promise<any> {
        const map = this.getMapper();
        const dto = map.toDto(state)
        dto.commit = true;
        dto.id = state.id;
        return this.getService()['update'](dto)
        .then(created => {
            dispatch({
                type: ActionType.CRUD_EDIT_SUCCESS,
                payload: created,
                context
            })
        })
    }

    public remove(dispatch, id: number, context?) {
        this.getService()
        ['delete'](id)
        .then(removed => 
            dispatch({
                type: ActionType.CRUD_REMOVE_SUCCESS,
                payload: id,
                context
            })
        );
    }

    public cancel(dispatch, context?) {
        dispatch({
            type: ActionType.CRUD_CANCEL,
            context
        })
    }

    private getService(): T {
        if(!this.service)
            this.service = factory.of<T>(this.serviceType); 
        
        return this.service;
    }

    private getMapper(): Mapper {
        if(!this.mapper)
            this.mapper = mapperFactory(this.serviceType); 
        
        return this.mapper;
    }
}

export default CrudActionCreator;