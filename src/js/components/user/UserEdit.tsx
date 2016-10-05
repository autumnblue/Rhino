declare const $: any;

import * as React from 'react';
import { AppState } from '../../model/state/AppState';
import { UserEditState } from '../../model/state/UserState';
import { connect } from 'react-redux';
import { UserAction } from '../../actions/UserAction';
import { EditModal, EditModalProps } from '../common/modal/EditModal';
import { InputMessageWrapper } from '../common/message/InputMessageWrapper';

class Component extends React.Component<Props, void> {
    private dispatch;   

    constructor(props) {
        super(props);
        this.dispatch = this.props.dispatch;
    }

    public render() {
        let modal: React.ReactElement<EditModalProps>;
        if(this.props.state.inFocus) {
            const input = this.props.state.input;

            modal = 
            <EditModal title={`Edit user ${input.username.value}`}>
                Login
                <InputMessageWrapper>
                    <input 
                        type="text"
                        value={input.username.value} />
                </InputMessageWrapper>
                First Name
                <InputMessageWrapper>
                    <input 
                        type="text"
                        value={input.firstName.value} />
                </InputMessageWrapper>
                Last Name
                <InputMessageWrapper>
                    <input 
                        type="text"
                        value={input.lastName.value} />
                </InputMessageWrapper>
                Email
                <InputMessageWrapper>
                    <input 
                        type="text"
                        value={input.email.value} />
                </InputMessageWrapper>
            </EditModal>
        }

        return (
            <div>
                { modal }
            </div>
        );
    }

    public componentDidUpdate() {
        if(this.props.state.inFocus) {
            $('#edit-modal').modal('show');
        }
    }

    // private onPasswordChange = (event): void => {
    //     LoginAction
    //         .changePassword(this.dispatch, event.target.value)
    // }
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

export const UserEdit = connect(mapStateToProps, mapDispatchToProps)(Component);
