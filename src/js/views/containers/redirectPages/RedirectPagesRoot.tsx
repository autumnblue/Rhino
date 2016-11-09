import * as React from 'react';
import { connect } from 'react-redux';
import { RedirectPagesList } from '../../components/redirectPages/RedirectPagesList';
import { AppState } from '../../../model/state/AppState';
import { ListState } from '../../../model/state/page/ListState';
import RedirectPageState from '../../../model/state2/redirectPage/RedirectPageState';
// import RedirectPagesAddModal from './modals/RedirectPagesAddModal';
import RedirectPagesEditModal from './modals/RedirectPagesEditModal';
import { CrudContainer, Props } from '../crud/CrudContainer';
import RedirectPagesAction from '../../../actions/RedirectPagesAction'

const RedirectPagesPageContainer = (props: Props2) => {
return <div>
    <CrudContainer
        title={ "Redirect Pages" }
        action={ RedirectPagesAction }
        {...props}>
            <RedirectPagesList 
                view={props.state.view}
                data={props.state || []}/>

    </CrudContainer>
    <RedirectPagesEditModal />
    </ div>
}

const mapStateToProps = (app: AppState): Props2 => ({
    state: app.redirectPages
})

const RedirectPagesPage = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(RedirectPagesPageContainer);

interface Props2 {
    dispatch?
    state?: RedirectPageState
    title?: string
    action?: any
    children?: any
}

export default RedirectPagesPage;     