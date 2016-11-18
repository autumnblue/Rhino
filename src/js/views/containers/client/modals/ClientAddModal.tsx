import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../crud/AddModalContainer';
import ClientForm from '../../../components/client/ClientAdd';
import ClientAction from '../../../../actions/client/ClientAction'
import ClientState from '../../../../model/state/ClientState';
import { AppState } from '../../../../model/state/AppState';

const ClientAddModalContainer = (props: Props) => 
    <AddModalContainer
        title="New Client"
        action={ ClientAction }
        {...props}>
            <ClientForm />
    </AddModalContainer>

// const mapStateToProps = (state: AppState): Props => ({
//     state: state.client.add
// })

const ClientAddModal = connect(
    null, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ClientAddModalContainer);

export default ClientAddModal;