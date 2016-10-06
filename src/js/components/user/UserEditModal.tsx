import * as React from 'react';
import { AppState } from '../../model/state/AppState';
import { UserEditState } from '../../model/state/UserState';
import { connect } from 'react-redux';
import { UserAction } from '../../actions/UserAction';
import { Modal } from '../common/Modal';
import { UserEdit, Buttons } from './UserEdit';

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
                title={ `Edit user ${input.username.value}` }
                buttons={ <Buttons 
                            onSubmit={this.onSubmit}/> }
                visible = { this.props.state.visible } >
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
        UserAction
            .submit(this.dispatch, this.props.state)
    }

    private onUsernameChange = (event): void => {
        UserAction
            .changeUsername(this.dispatch, event.target.value)
    }

    private onFirstNameChange = (event): void => {
        UserAction
            .changeFirstName(this.dispatch, event.target.value)
    }

    private onLastNameChange = (event): void => {
        UserAction
            .changeLastName(this.dispatch, event.target.value)
    }

    private onEmailChange = (event): void => {
        UserAction
            .changeEmail(this.dispatch, event.target.value)
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
