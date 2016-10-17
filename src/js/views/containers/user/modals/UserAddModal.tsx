import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../../model/state/AppState';
import { UserAddState } from '../../../../model/state/UserState';
import { UserAddAction } from '../../../../actions/user/UserAddAction';
import { Modal } from '../../../components/common/Modal';
import { UserAdd } from '../../../components/user/UserAdd';
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
                title={ 'New user' }
                visible={ this.props.state.visible}>
                    <Control>
                        <button onClick={this.onCancel}>
                            <span className="glyphicon glyphicon-share-alt"></span>
                            CANCEL
                        </button>
                    </Control>
                    <Control>
                        <button>SAVE</button>
                    </Control>
                    <UserAdd 
                        input={input}
                        onUsernameChange={this.onUsernameChange} 
                        onFirstNameChange={this.onFirstNameChange} 
                        onLastNameChange={this.onLastNameChange}
                        onEmailChange={this.onEmailChange} />
            </Modal>
        );
    }

    private onSubmit = ():void => {
        UserAddAction
            .submit(this.dispatch, this.props.state)
    }

    private onUsernameChange = (event): void => {
        UserAddAction
            .changeUsernameInput(this.dispatch, event.target.value)
    }

    private onFirstNameChange = (event): void => {
        UserAddAction
            .changeFirstNameInput(this.dispatch, event.target.value)
    }

    private onLastNameChange = (event): void => {
        UserAddAction
            .changeLastNameInput(this.dispatch, event.target.value)
    }

    private onEmailChange = (event): void => {
        UserAddAction
            .changeEmailInput(this.dispatch, event.target.value)
    }

    private onCancel = (): void => {
        UserAddAction
            .cancel(this.dispatch);
    }
}

interface Props {
    dispatch?
    state?: UserAddState
}

const mapStateToProps = (state: AppState): Props => ({
    state: state.user.add
})

const mapDispatchToProps = (dispatch): Props => ({
    dispatch: dispatch
})

export const UserAddModal = connect(mapStateToProps, mapDispatchToProps)(Container);
