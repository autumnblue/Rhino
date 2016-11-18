import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../crud/EditModalContainer';
import ClientForm from '../../../components/client/ClientEdit';
import ClientAction from '../../../../actions/client/ClientAction'
import ClientState from '../../../../model/state/ClientState';
import { AppState } from '../../../../model/state/AppState';

const ClientEditModalContainer = (props: Props) => 
    <EditModalContainer
        title="Edit Client"
        action={ ClientAction }
        {...props}>
            <ClientForm {...props.state} />
    </EditModalContainer>

// const mapStateToProps = (state: AppState): Props => ({
//     state: state.client.edit
// })

const ClientEditModal = connect(
    null, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ClientEditModalContainer);

export default ClientEditModal;
