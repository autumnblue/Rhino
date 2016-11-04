import * as React from 'react';
import { EmailServerForm } from '../../../model/state/EmailServerState';
import { InputMessageWrapper } from '../common/message/InputMessageWrapper';

export class EmailServerAdd extends React.Component<Props, void> {
    public render() {
        const inputs = this.props.inputs

        return (
            <form>
                <label>Host</label>
                <InputMessageWrapper msg={inputs.host.validationMsg}>
                    <input 
                        type="text"
                        value={inputs.host.value} 
                        onChange={this.props.onHostChange} />
                </InputMessageWrapper>
                
                <label>Port</label>
                <InputMessageWrapper msg={inputs.port.validationMsg}>
                    <input 
                        type="text"
                        value={inputs.port.value} 
                        onChange={this.props.onPortChange} />
                </InputMessageWrapper>

                <label>Login</label>
                <InputMessageWrapper msg={inputs.login.validationMsg}>
                    <input 
                        type="text"
                        value={inputs.login.value} 
                        onChange={this.props.onLoginChange} />
                </InputMessageWrapper>

                <label>Account Password</label>
                <InputMessageWrapper msg={inputs.password.validationMsg}>
                    <input 
                        type="text"
                        value={inputs.password.value} 
                        onChange={this.props.onPasswordChange} />
                </InputMessageWrapper>
            </form>
        );
    }
}

interface Props {
    inputs: EmailServerForm
    onHostChange(event): void
    onPortChange(event): void
    onLoginChange(event): void
    onPasswordChange(event): void
}