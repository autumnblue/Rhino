import * as React from 'react';
import { AppState } from '../../model/state/AppState';
import { Fields } from '../../model/state/UserState';
import { connect } from 'react-redux';
import { UserAction } from '../../actions/UserAction';
import { InputMessageWrapper } from '../common/message/InputMessageWrapper';

export class UserAdd extends React.Component<Props, void> {
    public render() {
        const input = this.props.input
        return (
            <form>
                <label>Username</label>
                <InputMessageWrapper>
                    <input 
                        type="text"
                        value={input.username.value} 
                        onChange={this.props.onUsernameChange} />
                </InputMessageWrapper>
                <label>Password</label>
                <InputMessageWrapper>
                    <input 
                        type="text"
                        value={input.email.value} 
                        onChange={this.props.onEmailChange} />
                </InputMessageWrapper>
                <label>Confirm Password</label>

                <hr />

                <InputMessageWrapper>
                    <input 
                        type="text"
                        value={input.email.value} 
                        onChange={this.props.onEmailChange} />
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