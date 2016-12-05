import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import { CrudContainer, Props } from '../common/CrudContainer';
import OAuthEngagementAction from '../../actions/OAuthEngagementAction'
import OAuthEngagementState from '../../model/state/oAuthEngagement/OAuthEngagementState';
import OAuthEngagementAddModal from './modals/OAuthEngagementAddModal';
import OAuthEngagementList from './OAuthEngagementList';
import OAuthEngagementEditModal from './modals/OAuthEngagementEditModal';

const OAuthEngagementRoot = (props: Props) => {
    return <div>
        <CrudContainer
            title="OAuth Engagements"
            action={ OAuthEngagementAction }
            {...props}>
                <OAuthEngagementList
                    view={props.state.view}
                    data={props.state.records} />
        </CrudContainer>
        <OAuthEngagementAddModal />
        <OAuthEngagementEditModal />
    </div>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.oAuthEngagement
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(OAuthEngagementRoot);  