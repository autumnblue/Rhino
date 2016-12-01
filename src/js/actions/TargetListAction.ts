import ActionCreator from './ActionCreator';
import TargetListService from '../service/TargetListService';
import CampaignService from '../service/CampaignService';
import ScheduleService from '../service/ScheduleService';
import EmailServerService from '../service/EmailServerService';
import EmailTemplateService from '../service/EmailTemplateService';
import LandingPageService from '../service/LandingPageService';
import RedirectPageService from '../service/RedirectPageService';
import PhishingDomainService from '../service/PhishingDomainService';
import PreviewService from '../service/PreviewService';
import TargetListState from '../model/stateZ/targetList/TargetListState'
import TargetListRecord from '../model/stateZ/targetList/TargetListRecord'
import { ActionType } from './ActionType';
import Ref from '../model/stateZ/RefZ';

const LOAD  = 'skiff/crud/LOAD';

class TargetListAction {
    private static QUALIFIER = 'targetList';

    public load(): Function {
        return (dispatch) => 
        new TargetListService().read()
        .then(dto => {
            const state = new TargetListState();
            state.records = dto.target_lists.map(dto => {
                const record = new TargetListRecord();
                record.description = dto.description
                record.client = new Ref(dto.client.id, dto.client.name)
                record.nickname = dto.nickname
                record.target = dto.target.map(target => {
                    return new Ref(target.id, target.email);
                })
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
}

export default new TargetListAction();