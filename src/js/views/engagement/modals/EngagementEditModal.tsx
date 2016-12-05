import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../common/EditModalContainer';
import EngagementAction from '../../../actions/EngagementAction2'
import EngagementState from '../../../model/stateZ/engagement/EngagementState';
import EngagementForm from '../form/EngagementForm';
import EngagementRecord from '../../../model/stateZ/engagement/EngagementRecord';
import { AppState } from '../../../model/stateZ/AppState';
import controls from '../form/FormControls';
import { Control } from '../../components/common/Controls';

const EngagementEditModal = (props: Props) => {
    return <EditModalContainer
        title="Edit Engagement"
        action={ EngagementAction }
        controls={ 
            [ 
                controls(props),     
                <Control key="preview">
                    <button onClick={ () => {
                        props.dispatch(EngagementAction.togglePreview(props.state.selectedRecord as EngagementRecord))
                    } }>
                        PREVIEW
                    </button>
                </Control>
            ]
        }
        submitId="engagement-submit-form"
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
