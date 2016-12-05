import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../common/AddModalContainer';
import OAuthEngagementAction from '../../../actions/OAuthEngagementAction2'
import OAuthEngagementState from '../../../model/stateZ/oAuthEngagement/OAuthEngagementState';
import OAuthEngagementForm from '../OAuthEngagementForm';
import { AppState } from '../../../model/stateZ/AppState';

const OAuthEngagementAddModal = (props: Props) => 
    <AddModalContainer
        title="New OAuth Engagement"
        action={ OAuthEngagementAction }
        {...props}>
            <OAuthEngagementForm {...props}/>
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.oAuthEngagement
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(OAuthEngagementAddModal);