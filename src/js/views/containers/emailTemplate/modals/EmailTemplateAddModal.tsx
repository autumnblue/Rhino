import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../crud/AddModalContainer';
import EmailTemplateForm from '../../../components/emailTemplate/EmailTemplateAdd';
import EmailTemplateAction from '../../../../actions/EmailTemplatesAction'
import { AppState } from '../../../../model/state/AppState';

const EmailTemplateAddModalContainer = (props: Props) => 
    <AddModalContainer
        title="New EmailTemplate"
        action={ EmailTemplateAction }
        {...props}>
            <EmailTemplateForm {...props.state} />
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.emailTemplate
})

const EmailTemplateAddModal = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(EmailTemplateAddModalContainer);

export default EmailTemplateAddModal;