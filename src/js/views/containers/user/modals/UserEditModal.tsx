import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../../model/state/AppState';
import { UserEditState } from '../../../../model/state/UserState';
import { UserEditAction } from '../../../../actions/user/UserEditAction';
import { Modal } from '../../../components/common/Modal';
import { UserEdit } from '../../../components/user/UserEdit';
import { Control } from '../../../components/common/Controls';

class Container extends React.Component<Props, void> {
    private dispatch;   

    constructor(props) {
        super(props);
        this.dispatch = this.props.dispatch;
    }

    public render() {
        const input = this.props.state.input;
        const name = `${input.firstName.value} ${input.lastName.value}`;

        return (
            <Modal 
                title={ `Edit user ${name}` }
                visible={ this.props.state.visible}>
                    <Control>
                        <button>REMOVE</button>
                    </Control>
                    <Control>
                        <button onClick={this.onCancel}>
                            <span className="glyphicon glyphicon-share-alt"></span>
                            &nbsp;CANCEL
                        </button>
                    </Control>
                    <Control>
                        <button>SAVE</button>
                    </Control>
                    <UserEdit 
                        input={input}
                        onUsernameChange={this.onUsernameChange} 
                        onFirstNameChange={this.onFirstNameChange} 
                        onLastNameChange={this.onLastNameChange}
                        onEmailChange={this.onEmailChange} />
            </Modal>
        );
    }

    private onSubmit = ():void => {
        UserEditAction
            .submit(this.dispatch, this.props.state)
    }

    private onUsernameChange = (event): void => {
        UserEditAction
            .changeUsernameInput(this.dispatch, event.target.value)
    }

    private onFirstNameChange = (event): void => {
        UserEditAction
            .changeFirstNameInput(this.dispatch, event.target.value)
    }

    private onLastNameChange = (event): void => {
        UserEditAction
            .changeLastNameInput(this.dispatch, event.target.value)
    }

    private onEmailChange = (event): void => {
        UserEditAction
            .changeEmailInput(this.dispatch, event.target.value)
    }

    private onCancel = (): void => {
        UserEditAction
            .cancel(this.dispatch);
    }
}

interface Props {
    dispatch?
    state?: UserEditState
}

const mapStateToProps = (state: AppState): Props => ({
    state: state.user.edit
})

const mapDispatchToProps = (dispatch): Props => ({
    dispatch: dispatch
})

export const UserEditModal = connect(mapStateToProps, mapDispatchToProps)(Container);
