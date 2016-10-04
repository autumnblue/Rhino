import * as React from 'react';
import { AppState } from '../../model/state/AppState';
import { LoginState } from '../../model/state/LoginState';
import { connect } from 'react-redux';
import { Table } from '../common/table/Table';
import { Column } from '../common/table/Column';
import { LoginAction } from '../../actions/LoginAction';
import { InputMessageWrapper } from '../common/message/InputMessageWrapper';

class Component extends React.Component<Props, void> {
    private dispatch;
    
    constructor(props) {
        super(props);
        this.dispatch = this.props.dispatch;
    }

    public render() {
        return (
            <form className="form-inline">
                <InputMessageWrapper>
                    <input 
                        type="text"
                        placeholder="Host"
                        value={this.props.state.input.host.value}
                        onChange={this.onHostChange} />
                </InputMessageWrapper>
                <InputMessageWrapper>
                    <input 
                        type="text"
                        placeholder="Port"
                        value={this.props.state.input.port.value}
                        onChange={this.onPortChange} />
                </InputMessageWrapper>
                <InputMessageWrapper>
                    <input 
                        type="text"
                        placeholder="Username"
                        value={this.props.state.input.username.value}
                        onChange={this.onUsernameChange} />
                </InputMessageWrapper>
                <InputMessageWrapper>
                    <input 
                        type="text"
                        placeholder="Password"
                        value={this.props.state.input.password.value}
                        onChange={this.onPasswordChange} />
                </InputMessageWrapper>

                <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={this.submit}>
                        Login
                </button>
            </form>
        );
    }

    private submit = (): void => {
        LoginAction
            .submit(this.dispatch, this.props.state)
    }

    private onHostChange = (event): void => {
        LoginAction
            .changeHost(this.dispatch, event.target.value)
    }

    private onPortChange = (event): void => {
        LoginAction
            .changePort(this.dispatch, event.target.value)
    }

    private onUsernameChange = (event): void => {
        LoginAction
            .changeUsername(this.dispatch, event.target.value)
    }

    private onPasswordChange = (event): void => {
        LoginAction
            .changePassword(this.dispatch, event.target.value)
    }
}

interface Props {
    dispatch?
    state?: LoginState
}

const mapStateToProps = (state: AppState): Props => {
    return {
        state: state.login
    }
}

const mapDispatchToProps = (dispatch): Props => {
    return { 
        dispatch: dispatch
    }
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(Component);
