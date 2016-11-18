import * as React from 'react';
import * as react_redux from 'react-redux';
import { Modal } from '../components/common/Modal';
import { Control } from '../components/common/Controls';
import { AppState } from '../../model/state/AppState';
import { CrudState } from '../../model/stateZ/CrudState';
import ActionCreator from '../../actions/ActionCreator';
import { Panel } from '../components/common/Panel';

export class CrudContainer extends React.Component<Props, void> {
    constructor(props) {
        super(props);
        this.initPage();
    }

    private initPage = () => {
        this.props.action
            .initPage(this.props.dispatch);
    }

    private renderChildren = () => {
        return React.Children.map(this.props.children, child => {
                return React.cloneElement(child as any, 
                    { onOpen: this.onEditOpen })
        }); 
    }

    public render() {
        const viewIcon = this.props.state.view == 'table'
            ? <span className="glyphicon glyphicon-th"></span>
            : <span className="glyphicon glyphicon-th-list"></span>

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

                    { this.renderChildren() }

                </Panel>
            </div>        
        )
    }
    
    private onEditOpen = (id: number) => {
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

export interface Props {
    dispatch?
    state?: CrudState
    title?: string
    action?: ActionCreator<any>
    children?: any
}
