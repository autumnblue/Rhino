import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/stateZ/AppState';
import { CrudContainer, Props } from '../common/CrudContainer';
import ScheduleAction from '../../actions/ScheduleAction2'
import ScheduleState from '../../model/stateZ/schedule/ScheduleState';
import ScheduleAddModal from './modals/ScheduleAddModal';
import ScheduleList from './ScheduleList';
import ScheduleEditModal from './modals/ScheduleEditModal';

const ScheduleRoot = (props: Props) => {
    return <div>
        <CrudContainer
            title="Schedules"
            action={ ScheduleAction }
            {...props}>
                <ScheduleList
                    view={props.state.view}
                    data={props.state.records} />
        </CrudContainer>
        <ScheduleAddModal />
        <ScheduleEditModal />
    </div>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.schedule
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ScheduleRoot);  