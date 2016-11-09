import * as React from 'react';
import * as react_redux from 'react-redux';
import { Modal } from '../../components/common/Modal';
import { Control } from '../../components/common/Controls';
import CrudState from '../../../model/state/CrudState';
import { AppState } from '../../../model/state/AppState';
import { ConfirmableButton } from '../../components/common/ConfirmableButton';
import CrudActionCreator from '../../../actions/crud/CrudActionCreator'
import { Service } from '../../../service/Service';

export const EditModalContainer = (props: Props) => {
    const onSubmit = (values):Promise<any> => {
        values.id = props.state['selected']
        return props.action
            .update(props.dispatch, values, props.state.context);
    }

    const onCancel = (): void => {
        props.action
            .cancel(props.dispatch, props.state.context);
    }

    const onRemove = (): void => {
        props.action
            .remove(props.dispatch, props.state.id, props.state.context);
    }

    const children = React.Children.map(props.children, child => {
        return React.cloneElement(child as React.ReactElement<any>,
            { submit: onSubmit, values: props.state });
    });

    return (
        <Modal 
            title={ props.title }
            visible={ props.state.visible || props.state['mode'] == 'EDIT'}>
                <Control>
                    <ConfirmableButton 
                        value="REMOVE" 
                        onConfirm={ onRemove }/>
                </Control>
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
    );
} 
 
export interface Props {
    dispatch?
    state?: CrudState
    title?: string
    action?: CrudActionCreator<Service>
    children?: React.ReactNode
}


