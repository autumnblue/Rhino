import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../crud/AddModalContainer';
//import EngagementForm from '../../../components/engagement/EngagementAdd';
import EngagementAction from '../../../../actions/EngagementAction'
import EngagementState from '../../../../model/state2/engagement/EngagementState';
import { AppState } from '../../../../model/state/AppState';

const EngagementAddModalContainer = (props: Props) => 
    <AddModalContainer
        title="New Engagement"
        action={ EngagementAction }
        {...props}>
            
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.engagement
})

const EngagementAddModal = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(EngagementAddModalContainer);

export default EngagementAddModal;