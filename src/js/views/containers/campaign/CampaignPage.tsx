import * as React from 'react';
import { connect } from 'react-redux';
import { CampaignList } from '../../components/campaign/CampaignList';
import { AppState } from '../../../model/state/AppState';
import { ListState } from '../../../model/state/page/ListState';
import CampaignState from '../../../model/state/CampaignState';
import { CrudContainer, Props } from '../crud/CrudContainer';
import CampaignAction from '../../../actions/campaign/CampaignAction'
import CampaignAddModal from './modals/CampaignAddModal';
import CampaignEditModal from './modals/CampaignEditModal';

const CampaignPageContainer = (props: Props) => {
   return  <div>
        <CrudContainer
            title={ "Campaigns" }
            action={ CampaignAction }
            {...props}>
                <CampaignList 
                    view={props.state.view}
                    list={props.state.list || []}/>
        </CrudContainer>
        <CampaignAddModal />
        <CampaignEditModal />
    </div>
}

const mapStateToProps = (state: AppState): Props => ({
    state: state.campaign.root
})

const CampaignPage = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(CampaignPageContainer);

export default CampaignPage;     