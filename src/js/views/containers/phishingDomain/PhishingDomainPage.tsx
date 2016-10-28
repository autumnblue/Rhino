import * as React from 'react';
import { PhishingDomainList } from '../../components/phishingDomain/PhishingDomainList';
import { Panel } from '../../components/common/Panel';
import { Control } from '../../components/common/Controls';
import { PhishingDomainAction } from'../../../actions/phishingDomain/PhishingDomainAction';
import { PageState } from '../../../model/state/PhishingDomainState';
import { AppState } from '../../../model/state/AppState';
import { ViewType } from '../../../model/state/page/ViewType';
import { PhishingDomainAddModal } from './modals/PhishingDomainAddModal';
import { PhishingDomainEditModal } from './modals/PhishingDomainEditModal';
import { CrudContainer, connect } from '../crud/CrudContainer'; 

export const PhishingDomainPage =
connect((state) => ({ state: state.phishingDomain.root }),
    class Container extends CrudContainer {
        public getPanelTitle() { return 'Phishing Domains' }

        public getActionCreator() { return PhishingDomainAction }
        
        public jsx() {
            return <PhishingDomainList 
                        onOpen={this.onEditOpen}
                        view={this.props.state.view}
                        list={this.props.state.list || []}/>
        }

        public modals() {
            return <div>
                <PhishingDomainAddModal />
                <PhishingDomainEditModal />
            </div>
        }
    }
);

// export class Container extends React.Component<Props, void> {
//     private dispatch;
    
//     constructor(props) {
//         super(props);
//         this.dispatch = this.props.dispatch;
//         this.initPage();
//     }

//     public render() {
//         const viewIcon = this.props.state.view == ViewType.TABLE
//             ? <span className="glyphicon glyphicon-th"></span>
//             : <span className="glyphicon glyphicon-th-list"></span>

//         return (
//             <div>
//                 <Panel title="Phishing Domains">
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
//                     <PhishingDomainList 
//                         onOpen={this.onEditOpen}
//                         view={this.props.state.view}
//                         list={this.props.state.list || []}/>

//                 </Panel>
//                 <PhishingDomainAddModal />
//                 <PhishingDomainEditModal />
//             </div>        
//         );
//     }

//     private initPage = () => {
//         PhishingDomainAction.
//             initPage(this.dispatch);
//     }

//     private onEditOpen = (id: number) => {
//         PhishingDomainAction
//             .openEdit(this.dispatch, id);
//     }

//     private onAddOpen = () => {
//         PhishingDomainAction.
//             openAdd(this.dispatch);
//     }

//     private onViewToggle = () => {
//         PhishingDomainAction.
//             toggleView(this.dispatch);
//     }
// }

// interface Props {
//     dispatch?
//     state?: PageState
// }

// const mapStateToProps = (state: AppState): Props => {
//     return {
//         state: state.phishingDomain.root
//     }
// };

// const mapDispatchToProps = (dispatch): Props => ({
//     dispatch: dispatch
// });

// export const PhishingDomainPage = connect(mapStateToProps, mapDispatchToProps)(Container);        