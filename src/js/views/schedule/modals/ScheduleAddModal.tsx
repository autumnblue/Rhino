import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../common/AddModalContainer';
import ScheduleAction from '../../../actions/ScheduleAction2'
import ScheduleState from '../../../model/stateZ/schedule/ScheduleState';
import ScheduleForm from '../ScheduleForm';
import { AppState } from '../../../model/state/AppState';

const ScheduleAddModal = (props: Props) => 
    <AddModalContainer
        title="New Schedule"
        action={ ScheduleAction }
        {...props}>
            <ScheduleForm {...props}/>
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.schedule
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ScheduleAddModal);