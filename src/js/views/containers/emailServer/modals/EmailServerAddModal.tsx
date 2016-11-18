import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../crud/AddModalContainer';
import EmailServerForm from '../../../components/emailServer/EmailServerAdd';
import EmailServerAction from '../../../../actions/EmailServerAction'
import { AppState } from '../../../../model/state/AppState';

const EmailServerAddModalContainer = (props: Props) => 
    <AddModalContainer
        title="New EmailServer"
        action={ EmailServerAction }
        {...props}>
            <EmailServerForm {...props.state} />
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.emailServer
})

const EmailServerAddModal = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(EmailServerAddModalContainer);

export default EmailServerAddModal;