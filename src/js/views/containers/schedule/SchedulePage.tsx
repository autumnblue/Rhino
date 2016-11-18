// import * as React from 'react';
// import { connect } from 'react-redux';
// import { ScheduleList } from '../../components/schedule/ScheduleList';
// import { AppState } from '../../../model/state/AppState';
// import { ListState } from '../../../model/state/page/ListState';
// import ScheduleState from '../../../model/state2/schedule/ScheduleState';
// import { CrudContainer, Props } from '../crud/CrudContainer';
// import ScheduleAction from '../../../actions/ScheduleAction'
// import ScheduleAddModal from './modals/ScheduleAddModal';
// import ScheduleEditModal from './modals/ScheduleEditModal';

// const SchedulePageContainer = (props: Props2) => {
//    return  <div>
//         <CrudContainer
//             title={ "Schedules" }
//             action={ ScheduleAction }
//             {...props}>
//                 <ScheduleList 
//                     view={props.state.view}
//                     data={props.state || []}/>
//         </CrudContainer>
//         <ScheduleAddModal />
//         // <ScheduleEditModal />
//     </div>
// }

// const mapStateToProps = (app: AppState): Props2 => ({
//     state: app.schedule
// })

// const SchedulePage = connect(
//     mapStateToProps, 
//     (dispatch): Props => ({
//         dispatch: dispatch
//     })
// )(SchedulePageContainer);

// interface Props2 {
//     dispatch?
//     state?: ScheduleState
//     title?: string
//     action?: any
//     children?: any
// }

// export default SchedulePage;     