import * as React from 'react';
import { AppState } from '../../../../model/state/AppState';
import { ClientEditAction } from '../../../../actions/client/ClientEditAction';
import { Modal } from '../../../components/common/Modal';
import { ClientAdd } from '../../../components/client/ClientAdd';
import { Control } from '../../../components/common/Controls';
import { EditModalContainer, connect } from '../../crud/EditModalContainer';

export const ClientEditModal =
connect((state) => ({ state: state.client.edit }), 
    class Container extends EditModalContainer {
        public getModalTitle() { return 'New client'};
        public getActionCreator() { return ClientEditAction }

        public jsx() {
            return <ClientAdd 
                input={this.props.state.input}
                onNameChange={this.onNameChange}
                onUrlChange={this.onUrlChange} 
                onTimezoneSelect={this.onTimezoneSelect}/>
        }

        private onNameChange = (event): void => {
            ClientEditAction
                .changeNameInput(this.props.dispatch, event.target.value)
        }

        private onUrlChange = (event): void => {
            ClientEditAction
                .changeUrlInput(this.props.dispatch, event.target.value)
        }

        private onTimezoneSelect = (selection: string): void => {
            ClientEditAction
                .selectTimezone(this.props.dispatch, selection);
        }
    }
);