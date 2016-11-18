// import * as React from 'react';
// import { connect } from 'react-redux';
// import { AppState } from '../../model/state/AppState';
// import { CrudContainer, Props } from '../common/CrudContainer';
// import VectorEmailAction from '../../actions/VectorEmailAction2'
// import VectorEmailState from '../../model/stateZ/vectorEmail/VectorEmailState';
// import VectorEmailAddModal from './modals/VectorEmailAddModal';
// import VectorEmailList from './VectorEmailList';
// import VectorEmailEditModal from './modals/VectorEmailEditModal';

// const VectorEmailRoot = (props: Props) => {
//     return <div>
//         <CrudContainer
//             title="VectorEmails"
//             action={ VectorEmailAction }
//             {...props}>
//                 <VectorEmailList
//                     view={props.state.view}
//                     data={props.state.records} />
//         </CrudContainer>
//     </div>
// }

// const mapStateToProps = (app: AppState): Props => ({
//     state: app.vectorEmail
// })

// export default connect(
//     mapStateToProps, 
//     (dispatch): Props => ({
//         dispatch: dispatch
//     })
// )(VectorEmailRoot);  