import * as React from 'react';
import { connect } from 'react-redux';
import { EmailServerList } from '../../components/emailServer/EmailServerList';
import { AppState } from '../../../model/state/AppState';
import { ListState } from '../../../model/state/page/ListState';
import EmailServerState from '../../../model/state/EmailServerState';
import EmailServerAddModal from './modals/EmailServerAddModal';
import { CrudContainer, Props } from '../crud/CrudContainer';
import EmailServerAction from '../../../actions/emailServer/EmailServerAction'

const EmailServerPageContainer = (props: Props) =>
    <CrudContainer
        title={ "Landing Pages" }
        action={ EmailServerAction }
        {...props}>
            <EmailServerList 
                view={props.state.view}
                list={props.state.list || []}/>

        <EmailServerAddModal />
    </CrudContainer>

const mapStateToProps = (state: AppState): Props => ({
    state: state.emailServer.root
})

const EmailServerPage = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(EmailServerPageContainer);

export default EmailServerPage;     