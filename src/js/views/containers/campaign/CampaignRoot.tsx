import * as React from 'react';
import { connect } from 'react-redux';
import { CampaignList } from '../../components/campaign/CampaignList';
import { AppState } from '../../../model/state/AppState';
import { ListState } from '../../../model/state/page/ListState';
import CampaignState from '../../../model/state2/campaign/CampaignState';
import { CrudContainer, Props } from '../crud/CrudContainer';
import CampaignAction from '../../../actions/CampaignAction'
import CampaignAddModal from './modals/CampaignAddModal';
import CampaignEditModal from './modals/CampaignEditModal';

const CampaignPageContainer = (props: Props2) => {
   return  <div>
        <CrudContainer
            title={ "Campaigns" }
            action={ CampaignAction }
            {...props}>
                <CampaignList 
                    view={props.state.view}
                    data={props.state || []}/>
        </CrudContainer>
        <CampaignAddModal />
        <CampaignEditModal />
    </div>
}

const mapStateToProps = (app: AppState): Props2 => ({
    state: app.campaign
})

const CampaignPage = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(CampaignPageContainer);

interface Props2 {
    dispatch?
    state?: CampaignState
    title?: string
    action?: any
    children?: any
}

export default CampaignPage;     