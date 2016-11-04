import * as React from 'react';
import * as react_redux from 'react-redux';
import { Modal } from '../../components/common/Modal';
import { Control } from '../../components/common/Controls';
import { ListState} from '../../../model/state/page/ListState';
import { AppState } from '../../../model/state/AppState';
import { CrudActionCreator2 } from '../../../actions/crud/CrudActionCreator2'
import { Service } from '../../../service/Service';
import { ViewType } from '../../../model/state/page/ViewType';
import { Panel } from '../../components/common/Panel';
import CrudState from '../../../model/state/CrudState';
import { AddModalContainer2 } from './AddModalContainer2';
import { EditModalContainer2 } from './EditModalContainer2';

export abstract class CrudContainer2 extends React.Component<Props, void> {
    constructor(props) {
        super(props);
        this.initPage();
    }

    public render() {
         const viewIcon = this.props.state.view == ViewType.TABLE
            ? <span className="glyphicon glyphicon-th"></span>
            : <span className="glyphicon glyphicon-th-list"></span>

        let modals = new Array<React.ReactElement<void>>();
        let others = new Array<React.ReactNode>();

        React.Children.forEach(this.props.children, (child, idx) => {
            if(
                (child['type'] == AddModalContainer2) 
                || (child['type'] == EditModalContainer2)
            )
                modals.push(<li key={idx}>{ child }</li>);
            else {
                const el = React.cloneElement(child as React.ReactElement<any>
                    , { onEditOpen: this.onEditOpen })
                others.push(child)
            }
        });

        return (
            <div>
                <Panel title={ this.props.title }>
                    <Control>
                        <button onClick={this.onAddOpen}>
                            <span className="glyphicon glyphicon-plus"></span>
                        </button>
                    </Control>
                    <Control>
                        <button onClick={this.onViewToggle}>
                            { viewIcon }
                        </button>
                    </Control>

                    { others }

                </Panel>
                
                { modals }

            </div>        
        );
    }

    private initPage = () => {
        this.props.action
            .initPage(this.props.dispatch);
    }

    protected onEditOpen = (id: number) => {
        this.props.action
            .openEdit(this.props.dispatch, id);
    }

    private onAddOpen = () => {
        this.props.action
            .openAdd(this.props.dispatch)
    }

    private onViewToggle = () => {
        this.props.action
            .toggleView(this.props.dispatch)
    }
}

interface Props {
    dispatch?
    state?: ListState<CrudState>
    title?: string
    action?: CrudActionCreator2<Service>
}

const mapDispatchToProps = (dispatch): Props => ({
    dispatch: dispatch
})

export const connect = (
    mapStateToProps: (state: AppState) => Props, 
    containerCls: React.ComponentClass<Props>) => {
        return react_redux.connect(mapStateToProps, mapDispatchToProps)(containerCls)
}
