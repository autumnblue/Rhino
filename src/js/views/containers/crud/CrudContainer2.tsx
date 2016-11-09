// import * as React from 'react';
// import * as react_redux from 'react-redux';
// import { Modal } from '../../components/common/Modal';
// import { Control } from '../../components/common/Controls';
// import { ListState} from '../../../model/state/page/ListState';
// import { AppState } from '../../../model/state/AppState';
// import CrudActionCreator from '../../../actions/crud/CrudActionCreator'
// import { Service } from '../../../service/Service';
// import { ViewType } from '../../../model/state/page/ViewType';
// import { Panel } from '../../components/common/Panel';
// import CrudState from '../../../model/state/CrudState';
// import { AddModalContainer } from './AddModalContainer';
// import { EditModalContainer } from './EditModalContainer';

// export class CrudContainer extends React.Component<Props, void> {
//     constructor(props) {
//         super(props);
//         this.initPage();
//     }

//     private initPage = () => {
//         this.props.action
//             .initPage(this.props.dispatch, this.props.state.context);
//     }

//     private renderChildren = () => {
//         return React.Children.map(this.props.children, child => {
//                 return React.cloneElement(child as any, 
//                     { onOpen: this.onEditOpen })
//         }); 
//     }

//     public render() {
//         const viewIcon = this.props.state.view == ViewType.TABLE
//             ? <span className="glyphicon glyphicon-th"></span>
//             : <span className="glyphicon glyphicon-th-list"></span>

//         return (
//             <div>
//                 <Panel title={ this.props.title }>
//                     <Control>
//                         <button onClick={this.onAddOpen}>
//                             <span className="glyphicon glyphicon-plus"></span>
//                         </button>
//                     </Control>
//                     <Control>
//                         <button onClick={this.onViewToggle}>
//                             { viewIcon }
//                         </button>
//                     </Control>

//                     { this.renderChildren() }

//                 </Panel>
//             </div>        
//         )
//     }
    
//     private onEditOpen = (id: number) => {
//         this.props.action
//             .openEdit(this.props.dispatch, id, this.props.state.context);
//     }

//     private onAddOpen = () => {
//         this.props.action
//             .openAdd(this.props.dispatch, this.props.state.context)
//     }

//     private onViewToggle = () => {
//         this.props.action
//             .toggleView(this.props.dispatch, this.props.state.context)
//     }
// }

// export interface Props {
//     dispatch?
//     state?: any
//     title?: string
//     action?: CrudActionCreator<Service>
//     children?: any
// }
