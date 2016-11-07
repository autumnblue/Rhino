import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../crud/AddModalContainer';
import LandingPagesForm from '../../../components/landingPages/LandingPagesAdd';
import LandingPagesAction from '../../../../actions/landingPages/LandingPagesAction'
import LandingPagesState from '../../../../model/state/LandingPagesState';
import { AppState } from '../../../../model/state/AppState';

const LandingPagesAddModalContainer = (props: Props) => 
    <AddModalContainer
        title="New Landing Page"
        action={ LandingPagesAction }
        {...props}>
            <LandingPagesForm />
    </AddModalContainer>

const mapStateToProps = (state: AppState): Props => ({
    state: state.landingPages.add
})

const LandingPagesAddModal = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(LandingPagesAddModalContainer);

export default LandingPagesAddModal;