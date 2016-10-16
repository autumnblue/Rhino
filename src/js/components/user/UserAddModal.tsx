import * as React from 'react';
import { AppState } from '../../model/state/AppState';
import { UserAddState } from '../../model/state/UserState';
import { connect } from 'react-redux';
import { UserAction } from '../../actions/UserAction';
import { Modal } from '../common/Modal';
import { UserAdd } from './UserAdd';
import { Control } from '../common/Controls';

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

    private onCancel = (): void => {
        UserAction
            .cancelAdd(this.dispatch);
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
