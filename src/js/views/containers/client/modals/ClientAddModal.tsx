import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../../model/state/AppState';
import { ClientAddState } from '../../../../model/state/ClientState';
import { ClientAddAction } from '../../../../actions/client/ClientAddAction';
import { Modal } from '../../../components/common/Modal';
import { ClientAdd } from '../../../components/client/ClientAdd';
import { Control } from '../../../components/common/Controls';

class Container extends React.Component<Props, void> {
    private dispatch;   

    constructor(props) {
        super(props);
        this.dispatch = this.props.dispatch;
    }

    public render() {
        const input = this.props.state.input;

        return (
            <Modal 
                title={ 'New client' }
                visible={ this.props.state.visible}>
                    <Control>
                        <button onClick={this.onCancel}>
                            <span className="glyphicon glyphicon-share-alt"></span>
                            CANCEL
                        </button>
                    </Control>
                    <Control>
                        <button onClick={this.onSubmit}>SAVE</button>
                    </Control>
                    <ClientAdd 
                        input={input}
                        onNameChange={this.onNameChange}
                        onUrlChange={this.onUrlChange} 
                        onTimezoneSelect={this.onTimezoneSelect}/>
            </Modal>
        );
    }

    private onSubmit = ():void => {
        ClientAddAction
            .submit(this.dispatch, this.props.state)
    }

    private onNameChange = (event): void => {
        ClientAddAction
            .changeNameInput(this.dispatch, event.target.value)
    }

    private onUrlChange = (event): void => {
        ClientAddAction
            .changeUrlInput(this.dispatch, event.target.value)
    }

    private onTimezoneSelect = (selection: string): void => {
        ClientAddAction
            .selectTimezone(this.dispatch, selection);
    }

    private onCancel = (): void => {
        ClientAddAction
            .cancel(this.dispatch);
    }
}

interface Props {
    dispatch?
    state?: ClientAddState
}

const mapStateToProps = (state: AppState): Props => ({
    state: state.client.add
})

const mapDispatchToProps = (dispatch): Props => ({
    dispatch: dispatch
})

export const ClientAddModal = connect(mapStateToProps, mapDispatchToProps)(Container);
