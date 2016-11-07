import * as React from 'react';
import * as react_redux from 'react-redux';
import { Modal } from '../../components/common/Modal';
import { Control } from '../../components/common/Controls';
import CrudState from '../../../model/state/CrudState';
import { AppState } from '../../../model/state/AppState';
import CrudActionCreator from '../../../actions/crud/CrudActionCreator'
import { Service } from '../../../service/Service';

export const AddModalContainer = (props: Props) => {
    const onSubmit = (values):Promise<any> => {
        return props.action
            .create(props.dispatch, values, props.state.context);
    }

    const onCancel = (): void => {
        props.action
            .cancel(props.dispatch, props.state.context);
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
    action?: CrudActionCreator<Service>
    children?: any
}
