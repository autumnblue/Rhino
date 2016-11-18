import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../crud/EditModalContainer';
import EmailTemplateForm from '../../../components/emailTemplate/EmailTemplateEdit';
import EmailTemplateAction from '../../../../actions/EmailTemplatesAction'
import { AppState } from '../../../../model/state/AppState';

const EmailTemplateEditModalContainer = (props: Props) => {
    return <EditModalContainer
        title="Edit EmailTemplate"
        action={ EmailTemplateAction }
        {...props}>
            <EmailTemplateForm {...props.state} />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.emailTemplate
})

const EmailTemplateEditModal = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(EmailTemplateEditModalContainer);

export default EmailTemplateEditModal;
