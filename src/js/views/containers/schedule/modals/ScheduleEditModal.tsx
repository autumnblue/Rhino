import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../crud/EditModalContainer';
import ScheduleForm from '../../../components/schedule/ScheduleEdit';
import ScheduleAction from '../../../../actions/ScheduleAction'
import { AppState } from '../../../../model/state/AppState';

const ScheduleEditModalContainer = (props: Props) => {
    return <EditModalContainer
        title="Edit Schedule"
        action={ ScheduleAction }
        {...props}>
            <ScheduleForm {...props.state} />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.schedule
})

const ScheduleEditModal = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ScheduleEditModalContainer);

export default ScheduleEditModal;
