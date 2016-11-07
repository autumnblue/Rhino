import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../crud/AddModalContainer';
import EmailServerForm from '../../../components/emailServer/EmailServerAdd';
import EmailServerAction from '../../../../actions/emailServer/EmailServerAction'
import EmailServerState from '../../../../model/state/EmailServerState';
import { AppState } from '../../../../model/state/AppState';

const EmailServerAddModalContainer = (props: Props) => 
    <AddModalContainer
        title="New Email Server"
        action={ EmailServerAction }
        {...props}>
            <EmailServerForm />
    </AddModalContainer>

const mapStateToProps = (state: AppState): Props => ({
    state: state.emailServer.add
})

const EmailServerAddModal = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(EmailServerAddModalContainer);

export default EmailServerAddModal;