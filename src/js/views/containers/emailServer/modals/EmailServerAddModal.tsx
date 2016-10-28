import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../../model/state/AppState';
import { EmailServerAddState} from '../../../../model/state/EmailServerState';
import { EmailServerAddAction } from '../../../../actions/emailServer/EmailServerAddAction';
import { Modal } from '../../../components/common/Modal';
import { EmailServerAdd } from '../../../components/emailServer/EmailServerAdd';
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
                title={ 'New email server' }
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
                    <EmailServerAdd 
                        inputs={input}
                        onHostChange={this.onHostChange}
                        onPortChange={this.onPortChange} 
                        onLoginChange={this.onLoginChange}
                        onPasswordChange={this.onPasswordChange} />
            </Modal>
        );
    }

    private onSubmit = ():void => {
        EmailServerAddAction
            .submit(this.dispatch, this.props.state)
    }

    private onHostChange = (event): void => {
        EmailServerAddAction
            .changeHostInput(this.dispatch, event.target.value)
    }

    private onPortChange = (event): void => {
        EmailServerAddAction
            .changePortInput(this.dispatch, event.target.value)
    }

    private onLoginChange = (event): void => {
        EmailServerAddAction
            .changeLoginInput(this.dispatch, event.target.value)
    }

    private onPasswordChange = (event): void => {
        EmailServerAddAction
            .changePasswordInput(this.dispatch, event.target.value)
    }

    private onCancel = (): void => {
        EmailServerAddAction
            .cancel(this.dispatch);
    }
}

interface Props {
    dispatch?
    state?: EmailServerAddState
}

const mapStateToProps = (state: AppState): Props => ({
    state: state.emailServer.add 
})

const mapDispatchToProps = (dispatch): Props => ({
    dispatch: dispatch
})

export const EmailServerAddModal = connect(mapStateToProps, mapDispatchToProps)(Container);
