import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../crud/EditModalContainer';
import EngagementForm from '../../../components/engagement/EngagementEdit';
import EngagementAction from '../../../../actions/EngagementAction'
import EngagementState from '../../../../model/state2/engagement/EngagementState';
import { AppState } from '../../../../model/state/AppState';

const EngagementEditModalContainer = (props: Props) => {
    return <EditModalContainer
        title="Edit Engagement"
        action={ EngagementAction }
        {...props}>
            <EngagementForm {...props.state} />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.engagement
})

const EngagementEditModal = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(EngagementEditModalContainer);

export default EngagementEditModal;
