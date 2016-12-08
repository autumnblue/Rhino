import ActionCreator from './ActionCreator';
import TargetListFlatViewService from '../service/TargetListFlatViewService';
import TargetListFlatViewState from '../model/state/targetListFlatView/TargetListFlatViewState';
import TargetListService from '../service/TargetListService';
import TargetListState from '../model/state/targetList/TargetListState'
import TargetListFlatViewRecord from '../model/state/targetListFlatView/TargetListFlatViewRecord'
import { ActionType } from './ActionType';
import Ref from '../model/state/RefZ';

const LOAD  = 'skiff/crud/LOAD';

class TargetListAction {
    private static QUALIFIER = 'targetList';

    public load(): Function {
        return (dispatch) => 
        new TargetListFlatViewService().read()
        .then(dto => {
            const state = new TargetListFlatViewState();
            state.records = dto.results.map(dto => {
                const record = new TargetListFlatViewRecord();
                record.description = dto.description
                record.client = new Ref(dto.client.id, dto.client.name)
                record.nickname = dto.nickname
                record.target = dto.target;
                record.id = dto.id;
                return record;
            })

            dispatch({
                type: ActionType.CRUD_INIT,
                payload: state,
                context: TargetListAction.QUALIFIER
            });
        });
    }

    public openEdit(id: number): Function {
        return (dispatch) => {
            dispatch({
                type: ActionType.CRUD_OPEN_EDIT,
                payload: id,
                context: TargetListAction.QUALIFIER
            });
        }
    }

    public openAdd(): Function {
        return (dispatch) => {
            dispatch({
                type: ActionType.CRUD_OPEN_ADD,
                context: TargetListAction.QUALIFIER
            });
        }
    }

    public upload(csv): Function {
         return (dispatch) => {
            new TargetListService().uploadCsv(csv)
            .then(dto => {
                dispatch({
                    type: ActionType.CRUD_OPEN_ADD,
                    context: TargetListAction.QUALIFIER
                });
            })
        }
    }

    public cancel(dispatch) {
        dispatch({
            type: ActionType.CRUD_CANCEL,
            context: TargetListAction.QUALIFIER
        }) 
    }

    public addColumn(name: string) {
        return (dispatch) => {
            dispatch({
                type: ActionType.TARGET_LIST_ADD_COLUMN,
                payload: name,
                context: TargetListAction.QUALIFIER
            });
        }
    }

    public updateRow(event) {
        return (dispatch) => {
            dispatch({
                type: ActionType.TARGET_LIST_UPDATE_ROW,
                payload: event,
                context: TargetListAction.QUALIFIER
            });
        }
    }

    public addRow(event) {
        return (dispatch) => {
            dispatch({
                type: ActionType.TARGET_LIST_ADD_ROW,
                payload: event,
                context: TargetListAction.QUALIFIER
            });
        }
    }
      
}

export default new TargetListAction();