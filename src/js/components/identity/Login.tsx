import * as React from 'react';
import { AppState } from '../../model/state/AppState';
import { LoginState } from '../../model/state/LoginState';
import { connect } from 'react-redux';
import { Table } from '../common/table/Table';
import { Column } from '../common/table/Column';
import { ActionCreator } from '../../actions/ActionCreator';
import { LoginAction } from '../../actions/LoginAction';
import { InputMessageWrapper } from '../common/message/InputMessageWrapper';

interface Props {
    login?(): void
    onHostChange?(event): void
    onPortChange?(event): void
    onUsernameChange?(event): void
    onPasswordChange?(event): void
    state?: LoginState
}

class Component extends React.Component<Props, void> {   
    public render() {
        return (
            <div>
                <InputMessageWrapper>
                    <input 
                        type="text"
                        placeholder="Host"
                        value={this.props.state.input.host.value}
                        onChange={this.props.onHostChange} />
                </InputMessageWrapper>
                <InputMessageWrapper>
                    <input 
                        type="text"
                        placeholder="Port"
                        value={this.props.state.input.port.value}
                        onChange={this.props.onPortChange} />
                </InputMessageWrapper>
                <InputMessageWrapper>
                    <input 
                        type="text"
                        placeholder="Username"
                        value={this.props.state.input.username.value}
                        onChange={this.props.onUsernameChange} />
                </InputMessageWrapper>
                <InputMessageWrapper>
                    <input 
                        type="text"
                        placeholder="Password"
                        value={this.props.state.input.password.value}
                        onChange={this.props.onPasswordChange} />
                </InputMessageWrapper>
            </div>
        );
    } 
}

const mapStateToProps = (state: AppState): Props => {
    return {
        state: state.login
    }
}

const mapDispatchToProps = (dispatch): Props => {
    return { 
        login: () => { ActionCreator.login(dispatch) },
        onHostChange: (event) => { LoginAction.changeHost(dispatch, event.target.value) },
        onPortChange: (event) => { LoginAction.changePort(dispatch, event.target.value) },
        onUsernameChange: (event) => { LoginAction.changeUsername(dispatch, event.target.value) },
        onPasswordChange: (event) => { LoginAction.changePassword(dispatch, event.target.value) }
    }
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(Component);    
