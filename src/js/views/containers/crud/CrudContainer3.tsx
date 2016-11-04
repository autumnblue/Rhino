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

export const CrudContainer = (props: Props) => {
    props.action
        .initPage(props.dispatch);
    
    const onEditOpen = (id: number) => {
        props.action
            .openEdit(props.dispatch, id);
    }

    const onAddOpen = () => {
        props.action
            .openAdd(props.dispatch)
    }

    const onViewToggle = () => {
        props.action
            .toggleView(props.dispatch)
    }

    const viewIcon = props.state.view == ViewType.TABLE
        ? <span className="glyphicon glyphicon-th"></span>
        : <span className="glyphicon glyphicon-th-list"></span>

    let modals = new Array<React.ReactElement<void>>();
    let others = new Array<React.ReactNode>();

    React.Children.forEach(props.children, (child, idx) => {
        if(
            (child['type'] == AddModalContainer2) 
            || (child['type'] == EditModalContainer2)
        )
            modals.push(<li key={idx}>{ child }</li>);
        else {
            const el = React.cloneElement(child as React.ReactElement<any>
                , { onEditOpen: onEditOpen })
            others.push(child)
        }
    });

    return (
        <div>
            <Panel title={ props.title }>
                <Control>
                    <button onClick={onAddOpen}>
                        <span className="glyphicon glyphicon-plus"></span>
                    </button>
                </Control>
                <Control>
                    <button onClick={onViewToggle}>
                        { viewIcon }
                    </button>
                </Control>

                { others }

            </Panel>
            
            { modals }

        </div>        
    )
}

export interface Props {
    dispatch?
    state?: ListState<CrudState>
    title?: string
    action?: CrudActionCreator2<Service>
    children?: any
}
