import * as React from 'react';
import { AppState } from '../../model/state/AppState';
import { Fields } from '../../model/state/UserState';
import { connect } from 'react-redux';
import { UserAction } from '../../actions/UserAction';
import { InputMessageWrapper } from '../common/message/InputMessageWrapper';

export class UserEdit extends React.Component<Props, void> {
    public render() {
        const input = this.props.input
        return (
            <form>
                Login
                <InputMessageWrapper>
                    <input 
                        type="text"
                        value={input.username.value} 
                        onChange={this.props.onUsernameChange} />
                </InputMessageWrapper>
                First Name
                <InputMessageWrapper>
                    <input 
                        type="text"
                        value={input.firstName.value} 
                        onChange={this.props.onFirstNameChange} />
                </InputMessageWrapper>
                Last Name
                <InputMessageWrapper>
                    <input 
                        type="text"
                        value={input.lastName.value} 
                        onChange={this.props.onLastNameChange} />
                </InputMessageWrapper>
                Email
                <InputMessageWrapper>
                    <input 
                        type="text"
                        value={input.email.value} 
                        onChange={this.props.onEmailChange} />
                </InputMessageWrapper>
            </form>
        );
    }

    // public static getButtons(): React.ReactElement<{}> {
    //     return (
    //         <button 
    //             type="button" 
    //             className="btn btn-primary"
    //             onClick={this.}>
    //                 Save
    //         </button>
    //     );
    // }
}

export class Buttons extends React.Component<{
        onSubmit(): void
    }, void> {
    public render() {
        return (
            <button 
                type="button" 
                className="btn btn-primary"
                onClick={this.props.onSubmit}>
                    Save
            </button>
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