import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../common/AddModalContainer';
import LandingPageAction from '../../../actions/LandingPageAction2'
import LandingPageState from '../../../model/stateZ/landingPage/LandingPageState';
import LandingPageForm from '../LandingPageForm';
import { AppState } from '../../../model/state/AppState';

const LandingPageAddModal = (props: Props) => 
    <AddModalContainer
        title="New Landing Page"
        action={ LandingPageAction }
        {...props}>
            <LandingPageForm {...props}/>
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.landingPage
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(LandingPageAddModal);