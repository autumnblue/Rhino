// import * as React from 'react';
// import { connect } from 'react-redux';
// import { EmailServerList } from '../../components/emailServer/EmailServerList';
// import { AppState } from '../../../model/state/AppState';
// import { ListState } from '../../../model/state/page/ListState';
// import EmailServerState from '../../../model/state2/emailServer/EmailServerState';
// import { CrudContainer, Props } from '../crud/CrudContainer';
// import EmailServerAction from '../../../actions/EmailServerAction'
// import EmailServerAddModal from './modals/EmailServerAddModal';
// import EmailServerEditModal from './modals/EmailServerEditModal';

// const EmailServerPageContainer = (props: Props2) => {
//    return  <div>
//         <CrudContainer
//             title={ "EmailServers" }
//             action={ EmailServerAction }
//             {...props}>
//                 <EmailServerList 
//                     view={props.state.view}
//                     data={props.state || []}/>
//         </CrudContainer>
//         <EmailServerAddModal />
//         <EmailServerEditModal />
//     </div>
// }

// const mapStateToProps = (app: AppState): Props2 => ({
//     state: app.emailServer
// })

// const EmailServerPage = connect(
//     mapStateToProps, 
//     (dispatch): Props => ({
//         dispatch: dispatch
//     })
// )(EmailServerPageContainer);

// interface Props2 {
//     dispatch?
//     state?: EmailServerState
//     title?: string
//     action?: any
//     children?: any
// }

// export default EmailServerPage;     