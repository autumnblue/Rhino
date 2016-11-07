import * as React from 'react';
import { connect } from 'react-redux';
import { ScheduleList } from '../../components/schedule/ScheduleList';
import { AppState } from '../../../model/state/AppState';
import { ListState } from '../../../model/state/page/ListState';
import ScheduleState from '../../../model/state/ScheduleState';
import ScheduleAddModal from './modals/ScheduleAddModal';
import { CrudContainer, Props } from '../crud/CrudContainer';
import ScheduleAction from '../../../actions/schedule/ScheduleAction'

const SchedulePageContainer = (props: Props) =>
    <CrudContainer
        title={ "Landing Pages" }
        action={ ScheduleAction }
        {...props}>
            <ScheduleList 
                view={props.state.view}
                list={props.state.list || []}/>

        <ScheduleAddModal />
    </CrudContainer>

const mapStateToProps = (state: AppState): Props => ({
    state: state.schedule.root
})

const SchedulePage = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(SchedulePageContainer);

export default SchedulePage;     