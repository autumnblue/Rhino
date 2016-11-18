import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../crud/EditModalContainer';
import EmailServerForm from '../../../components/emailServer/EmailServerEdit';
import EmailServerAction from '../../../../actions/EmailServerAction'
import { AppState } from '../../../../model/state/AppState';

const EmailServerEditModalContainer = (props: Props) => {
    return <EditModalContainer
        title="Edit EmailServer"
        action={ EmailServerAction }
        {...props}>
            <EmailServerForm {...props.state} />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.emailServer
})

const EmailServerEditModal = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(EmailServerEditModalContainer);

export default EmailServerEditModal;
