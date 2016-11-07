import * as React from 'react';
import { connect } from 'react-redux';
import { ClientList } from '../../components/client/ClientList';
import { AppState } from '../../../model/state/AppState';
import { ListState } from '../../../model/state/page/ListState';
import ClientState from '../../../model/state/ClientState';
import ClientAddModal from './modals/ClientAddModal';
import ClientEditModal from './modals/ClientEditModal';
import { CrudContainer, Props } from '../crud/CrudContainer';
import ClientAction from '../../../actions/client/ClientAction'

const ClientPageContainer = (props: Props) =>
    <div>
        <CrudContainer
            title="Clients"
            action={ ClientAction }
            {...props}>
                <ClientList 
                    view={props.state.view}
                    list={props.state.list || []}/>
        </CrudContainer>
        <ClientAddModal />
        <ClientEditModal />
    </div>


const mapStateToProps = (state: AppState): Props => ({
    state: state.client.root
})

const ClientPage = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ClientPageContainer);

export default ClientPage;     