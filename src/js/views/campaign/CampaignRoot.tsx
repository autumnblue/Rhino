import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import { CrudContainer, Props } from '../common/CrudContainer';
import CampaignAction from '../../actions/CampaignAction'
import CampaignState from '../../model/state/campaign/CampaignState';
import CampaignAddModal from './modals/CampaignAddModal';
import CampaignList from './CampaignList';
import CampaignEditModal from './modals/CampaignEditModal';

const CampaignRoot = (props: Props) => {
    return <div>
        <CrudContainer
            title="Campaigns"
            action={ CampaignAction }
            {...props}>
                <CampaignList
                    view={props.state.view}
                    data={props.state.records} />
        </CrudContainer>
        <CampaignAddModal />
        <CampaignEditModal />
    </div>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.campaign
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(CampaignRoot);  