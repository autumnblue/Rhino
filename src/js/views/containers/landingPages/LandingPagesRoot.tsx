import * as React from 'react';
import { connect } from 'react-redux';
import { LandingPagesList } from '../../components/landingPages/LandingPagesList';
import { AppState } from '../../../model/state/AppState';
import { ListState } from '../../../model/state/page/ListState';
import LandingPageState from '../../../model/state2/landingPage/LandingPageState';
import LandingPagesAddModal from './modals/LandingPagesAddModal';
import LandingPagesEditModal from './modals/LandingPagesEditModal';
import { CrudContainer, Props } from '../crud/CrudContainer';
import LandingPagesAction from '../../../actions/LandingPagesAction'

const LandingPagesPageContainer = (props: Props2) => {
return <div>
    <CrudContainer
        title={ "Landing Pages" }
        action={ LandingPagesAction }
        {...props}>
            <LandingPagesList 
                view={props.state.view}
                data={props.state || []}/>

    </CrudContainer>
    <LandingPagesAddModal />
    <LandingPagesEditModal />
    </ div>
}

const mapStateToProps = (app: AppState): Props2 => ({
    state: app.landingPages
})

const LandingPagesPage = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(LandingPagesPageContainer);

interface Props2 {
    dispatch?
    state?: LandingPageState
    title?: string
    action?: any
    children?: any
}

export default LandingPagesPage;     