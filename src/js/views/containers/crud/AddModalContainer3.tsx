import * as React from 'react';
import * as react_redux from 'react-redux';
import { Modal } from '../../components/common/Modal';
import { Control } from '../../components/common/Controls';
import CrudState from '../../../model/state/CrudState';
import { AppState } from '../../../model/state/AppState';
import { CrudActionCreator2 } from '../../../actions/crud/CrudActionCreator2'
import { Service } from '../../../service/Service';

export const AddModalContainer = (props: Props) => {

    const onSubmit = ():void => {
        props.action
            .create(props.dispatch, props.state)
    }

    const onCancel = (): void => {
        props.action
            .cancel(props.dispatch);
    }

    const children = React.Children.map(props.children, child => {
        return React.cloneElement(child as React.ReactElement<any>,
            { submit: onSubmit });
    });

    return <Modal 
        title={ props.title }
        visible={ props.state.visible}>
            <Control>
                <button onClick={onCancel}>
                    <span className="glyphicon glyphicon-share-alt"></span>
                    CANCEL
                </button>
            </Control>
            <Control>
                <button onClick={onSubmit}>SAVE</button>
            </Control>

            { children }
    </Modal>   
}

export interface Props {
    dispatch?
    state?: CrudState
    title?: string
    action?: CrudActionCreator2<Service>
    children?: any
}
