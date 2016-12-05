import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/stateZ/AppState';
import { CrudContainer, Props } from '../common/CrudContainer';
import ClientAction from '../../actions/ClientAction2'
import ClientState from '../../model/stateZ/client/ClientState';
import ClientAddModal from './modals/ClientAddModal';
import ClientList from './ClientList';
import ClientEditModal from './modals/ClientEditModal';

const ClientRoot = (props: Props) => {
    return <div>
        <CrudContainer
            title="Clients"
            action={ ClientAction }
            {...props}>
                <ClientList
                    view={props.state.view}
                    data={props.state.records} />
        </CrudContainer>
        <ClientAddModal />
        <ClientEditModal />
    </div>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.client
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ClientRoot);  