import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../common/EditModalContainer';
import ScheduleAction from '../../../actions/ScheduleAction2'
import ScheduleState from '../../../model/stateZ/schedule/ScheduleState';
import ScheduleForm from '../ScheduleForm';
import { AppState } from '../../../model/stateZ/AppState';

const ScheduleEditModal = (props: Props) => {
    return <EditModalContainer
        title="Edit Schedule"
        action={ ScheduleAction }
        {...props}>
            <ScheduleForm />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.schedule
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ScheduleEditModal);
