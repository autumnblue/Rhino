import * as React from 'react';
import * as react_redux from 'react-redux';
import { Modal } from '../components/common/Modal2';
import { Control } from '../components/common/Controls';
import { CrudState } from '../../model/stateZ/CrudState';
import { ConfirmableButton } from '../components/common/ConfirmableButton';
import ActionCreator from '../../actions/ActionCreator';
import Record from '../../model/stateZ/Record';

export const EditModalContainer = (props: Props) => {
    const onSubmit = (values: Record):Promise<any> => {
        values.id = props.state.selectedRecord.id;
        return props.action
            .update(props.dispatch, values);
    }

    const onCancel = (): void => {
        props.action
            .cancel(props.dispatch);
    }

    const onRemove = (): void => {
        props.action
            .remove(props.dispatch, props.state.selectedRecord.id);
    }

    const children = React.Children.map(props.children, child => {
        return React.cloneElement(child as React.ReactElement<any>,
            { submit: onSubmit, values: props.state });
    });

    return (
        <Modal 
            title={ props.title }
            visible={ props.state.mode == 'edit' }>
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
                    <label htmlFor="submit-form">SAVE</label>
                </Control>

                { children }
        </Modal>
    );
} 
 
export interface Props {
    dispatch?
    state?: CrudState
    title?: string
    action?: ActionCreator<any>
    children?: React.ReactNode
}


