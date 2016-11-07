import * as React from 'react';
import { connect } from 'react-redux';
import { LandingPagesList } from '../../components/landingPages/LandingPagesList';
import { AppState } from '../../../model/state/AppState';
import { ListState } from '../../../model/state/page/ListState';
import LandingPagesState from '../../../model/state/LandingPagesState';
import LandingPagesAddModal from './modals/LandingPagesAddModal';
import LandingPagesEditModal from './modals/LandingPagesEditModal';
import { CrudContainer, Props } from '../crud/CrudContainer';
import LandingPagesAction from '../../../actions/landingPages/LandingPagesAction'

const LandingPagesPageContainer = (props: Props) =>
    <CrudContainer
        title={ "Landing Pages" }
        action={ LandingPagesAction }
        {...props}>
            <LandingPagesList 
                view={props.state.view}
                list={props.state.list || []}/>

        <LandingPagesAddModal />
        <LandingPagesEditModal />
    </CrudContainer>

const mapStateToProps = (state: AppState): Props => ({
    state: state.landingPages.root
})

const LandingPagesPage = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(LandingPagesPageContainer);

export default LandingPagesPage;     