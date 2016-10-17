import * as React from 'react';
import { AppState } from '../../model/state/AppState';
import { Fields } from '../../model/state/UserState';
import { connect } from 'react-redux';
import { UserAction } from '../../actions/UserAction';
import { InputMessageWrapper } from '../common/message/InputMessageWrapper';
import { Guide } from '../common/Guide';

export class UserEdit extends React.Component<Props, void> {
    public render() {
        const input = this.props.input
        return (
            <div>
                <form>
                    <label>Username</label>
                    <InputMessageWrapper>
                        <input 
                            type="text"
                            value={input.username.value} 
                            onChange={this.props.onUsernameChange} />
                    </InputMessageWrapper>
                    <label>First Name</label>
                    <InputMessageWrapper>
                        <input 
                            type="text"
                            value={input.firstName.value} 
                            onChange={this.props.onFirstNameChange} />
                    </InputMessageWrapper>
                    <label>Last Name</label>
                    <InputMessageWrapper>
                        <input 
                            type="text"
                            value={input.lastName.value} 
                            onChange={this.props.onLastNameChange} />
                    </InputMessageWrapper>
                    <label>Email</label>
                    <InputMessageWrapper>
                        <input 
                            type="text"
                            value={input.email.value} 
                            onChange={this.props.onEmailChange} />
                    </InputMessageWrapper>
                </form>

                <hr />

                <Guide>
                    You can change your password via your <a href="/profile">Profile</a>.
                </Guide>
            </div>
        );
    }
}

interface Props {
    input: Fields
    onUsernameChange(event): void
    onFirstNameChange(event): void
    onLastNameChange(event): void
    onEmailChange(event): void
}