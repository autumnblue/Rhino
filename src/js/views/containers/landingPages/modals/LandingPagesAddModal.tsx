import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../crud/AddModalContainer';
import LandingPagesForm from '../../../components/landingPages/LandingPagesAdd';
import LandingPagesAction from '../../../../actions/LandingPagesAction'
import LandingPagesState from '../../../../model/state/LandingPagesState';
import { AppState } from '../../../../model/state/AppState';

const LandingPagesAddModalContainer = (props: Props) => {
    return <AddModalContainer
        title="New Landing Page"
        action={ LandingPagesAction }
        {...props}>
            <LandingPagesForm {...props.state} />
    </AddModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.landingPages
})

const LandingPagesAddModal = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(LandingPagesAddModalContainer);

export default LandingPagesAddModal;