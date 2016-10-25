import * as React from 'react';
import { AddFields } from '../../../model/state/UserState';
import { InputMessageWrapper } from '../common/message/InputMessageWrapper';

export class UserAdd extends React.Component<Props, void> {
    public render() {
        const input = this.props.input
        return (
            <form>
                <label>Username</label>
                <InputMessageWrapper msg={this.props.input.username.validationMsg}>
                    <input 
                        type="text"
                        value={input.username.value} 
                        onChange={this.props.onUsernameChange} />
                </InputMessageWrapper>
                <label>Password</label>
                <InputMessageWrapper msg={this.props.input.password.validationMsg}>
                    <input 
                        type="password"
                        value={input.password.value} 
                        onChange={this.props.onPasswordChange} />
                </InputMessageWrapper>
                <label>Confirm Password</label>
                <InputMessageWrapper msg={this.props.input.confirm.validationMsg}>
                    <input 
                        type="password"
                        value={input.confirm.value} 
                        onChange={this.props.onConfirmChange} />
                </InputMessageWrapper>

                <hr />

                <label>First Name</label>
                <InputMessageWrapper msg={this.props.input.firstName.validationMsg}>
                    <input 
                        type="text"
                        value={input.firstName.value} 
                        onChange={this.props.onFirstNameChange} />
                </InputMessageWrapper>
                <label>Last Name</label>
                <InputMessageWrapper msg={this.props.input.lastName.validationMsg}>
                    <input 
                        type="text"
                        value={input.lastName.value} 
                        onChange={this.props.onLastNameChange} />
                </InputMessageWrapper>
                <label>Email</label>
                <InputMessageWrapper msg={this.props.input.email.validationMsg}>
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
    input: AddFields
    onUsernameChange(event): void
    onPasswordChange(event): void
    onConfirmChange(event): void
    onFirstNameChange(event): void
    onLastNameChange(event): void
    onEmailChange(event): void
}