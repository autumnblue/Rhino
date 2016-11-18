import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../crud/AddModalContainer';
import ScheduleForm from '../../../components/schedule/ScheduleAdd';
import ScheduleAction from '../../../../actions/ScheduleAction'
import { AppState } from '../../../../model/state/AppState';

const ScheduleAddModalContainer = (props: Props) => 
    <AddModalContainer
        title="New Schedule"
        action={ ScheduleAction }
        {...props}>
            <ScheduleForm {...props.state} />
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.schedule
})

const ScheduleAddModal = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ScheduleAddModalContainer);

export default ScheduleAddModal;