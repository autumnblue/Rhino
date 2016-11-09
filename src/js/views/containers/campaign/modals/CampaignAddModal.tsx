import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../crud/AddModalContainer';
import CampaignForm from '../../../components/campaign/CampaignAdd';
import CampaignAction from '../../../../actions/campaign/CampaignAction'
import CampaignState from '../../../../model/state/CampaignState';
import { AppState } from '../../../../model/state/AppState';

const CampaignAddModalContainer = (props: Props) => 
    <AddModalContainer
        title="New Campaign"
        action={ CampaignAction }
        {...props}>
            <CampaignForm {...props.state} />
    </AddModalContainer>

const mapStateToProps = (state: AppState): Props => ({
    state: state.campaign.add
})

const CampaignAddModal = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(CampaignAddModalContainer);

export default CampaignAddModal;