import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../common/EditModalContainer';
import EngagementAction from '../../../actions/EngagementAction2'
import EngagementState from '../../../model/stateZ/engagement/EngagementState';
import EngagementForm from '../EngagementForm';
import { AppState } from '../../../model/state/AppState';

const EngagementEditModal = (props: Props) => {
    return <EditModalContainer
        title="Edit Engagement"
        action={ EngagementAction }
        {...props}>
            <EngagementForm />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.engagement
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(EngagementEditModal);
