import CampaignService from '../service/campaign/CampaignService';
import CampaignXDto from '../model/dto2/campaign/CampaignXDto';
import CampaignMapper from '../mappers/CampaignMapper';
import CampaignForm from '../model/state2/campaign/CampaignForm';
import { ActionType } from './ActionType';

class CampaignActionCreator {
    public initPage(dispatch): void {
        const obj = new CampaignXDto();
        
        new CampaignService().read()
        .then(fulfilled => {
            const state = CampaignMapper.toState(fulfilled);

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

    public update(dispatch, values: CampaignForm, context?): Promise<any> {
        const dto = CampaignMapper.toDto(values)
        dto['commit'] = true;
        return new CampaignService().update(<any>dto)
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

    public remove(dispatch, id: number, context?) {
        new CampaignService().delete(id)
        .then(removed => 
            dispatch({
                type: ActionType.CRUD_REMOVE_SUCCESS,
                payload: id,
                context
            })
        );
    }

    public create(dispatch, values: CampaignForm, context?): Promise<any> {
        const dto = CampaignMapper.toDto(values);
        dto['commit'] = true;
        return new CampaignService().create(<any>dto)
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

const CampaignAction: CampaignActionCreator = new CampaignActionCreator();
export default CampaignAction;