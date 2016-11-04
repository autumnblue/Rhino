import * as React from 'react';
import { AppState } from '../../../../model/state/AppState';
import { ClientAddAction } from '../../../../actions/client/ClientAddAction';
import { Modal } from '../../../components/common/Modal';
import { ClientAdd } from '../../../components/client/ClientAdd';
import { Control } from '../../../components/common/Controls';
import { AddModalContainer, connect } from '../../crud/AddModalContainer';

export const ClientAddModal =
connect((state) => ({ state: state.client.add }), 
    class Container extends AddModalContainer {
        public getModalTitle() { return 'New client'};
        public getActionCreator() { return ClientAddAction }

        public jsx() {
            return <ClientAdd 
                input={this.props.state.input}
                onNameChange={this.onNameChange}
                onUrlChange={this.onUrlChange} 
                onTimezoneSelect={this.onTimezoneSelect}/>
        }

        private onNameChange = (event): void => {
            ClientAddAction
                .changeNameInput(this.props.dispatch, event.target.value)
        }

        private onUrlChange = (event): void => {
            ClientAddAction
                .changeUrlInput(this.props.dispatch, event.target.value)
        }

        private onTimezoneSelect = (selection: string): void => {
            ClientAddAction
                .selectTimezone(this.props.dispatch, selection);
        }
    }
);

// interface Props {
//     dispatch?
//     state?: ClientAddState
// }

// const mapStateToProps = (state: AppState): Props => ({
//     state: state.client.add
// })

// const mapDispatchToProps = (dispatch): Props => ({
//     dispatch: dispatch
// })

// export const ClientAddModal = connect(mapStateToProps, mapDispatchToProps)(Container);
