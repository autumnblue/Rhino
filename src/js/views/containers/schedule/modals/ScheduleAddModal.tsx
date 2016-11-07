import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../crud/AddModalContainer';
import ScheduleForm from '../../../components/schedule/ScheduleAdd';
import ScheduleAction from '../../../../actions/schedule/ScheduleAction'
import ScheduleState from '../../../../model/state/ScheduleState';
import { AppState } from '../../../../model/state/AppState';

const ScheduleAddModalContainer = (props: Props) => 
    <AddModalContainer
        title="New Landing Page"
        action={ ScheduleAction }
        {...props}>
            <ScheduleForm />
    </AddModalContainer>

const mapStateToProps = (state: AppState): Props => ({
    state: state.schedule.add
})

const ScheduleAddModal = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ScheduleAddModalContainer);

export default ScheduleAddModal;