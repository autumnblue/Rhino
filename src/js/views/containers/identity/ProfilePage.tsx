import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../model/state/AppState';
import { ProfileState } from '../../../model/state/ProfileState';
import { ProfileAction } from '../../../actions/identity/ProfileAction';
import { InputMessageWrapper } from '../../../components/common/message/InputMessageWrapper';
import { Panel } from '../../../components/common/Panel';

class Component extends React.Component<Props, void> {
    private dispatch;
    
    constructor(props) {
        super(props);
        this.dispatch = this.props.dispatch;
    }

    public render() {
        return (
            <Panel title="Profile">
                <form id="profile-form" className="form-inline">
                    <InputMessageWrapper msg={this.props.state.input.password.validationMsg}>
                        <input
                            placeholder="Current Password"
                            type="password"
                            value={this.props.state.input.password.value}
                            onChange={this.onPasswordInputChange} />
                    </InputMessageWrapper>

                    <InputMessageWrapper msg={this.props.state.input.newPassword.validationMsg}>
                        <input
                            placeholder="New Password"
                            type="password"
                            value={this.props.state.input.newPassword.value}
                            onChange={this.onNewPasswordInputChange} />
                    </InputMessageWrapper>

                    <InputMessageWrapper msg={this.props.state.input.confirm.validationMsg}>
                        <input
                            placeholder="Confirm" 
                            type="password"
                            value={this.props.state.input.confirm.value}
                            onChange={this.onConfirmInputChange} />
                    </InputMessageWrapper>

                    <button
                        type="button"
                        onClick={this.submit}>
                            Update
                    </button>
                </form>
            </Panel>
        );
    }

    private submit = (): void => {
        // ProfileAction
        //     .submit(this.dispatch, this.props.state)
    }

    private onPasswordInputChange = (event): void => {
        ProfileAction
            .changePasswordInput(this.dispatch, event.target.value)
    }

    private onNewPasswordInputChange = (event): void => {
        ProfileAction
            .changeNewPasswordInput(this.dispatch, event.target.value)
    }

    private onConfirmInputChange = (event): void => {
        ProfileAction
            .changeConfirmInput(this.dispatch, event.target.value)
    }
}

interface Props {
    dispatch?
    state?: ProfileState
}

const mapStateToProps = (state: AppState): Props => {
    return {
        state: state.profile
    }
}

const mapDispatchToProps = (dispatch): Props => {
    return { 
        dispatch: dispatch
    }
}

export const ProfilePage = connect(mapStateToProps, mapDispatchToProps)(Component);
