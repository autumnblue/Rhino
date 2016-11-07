import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../crud/EditModalContainer';
import LandingPagesForm from '../../../components/landingPages/LandingPagesEdit';
import LandingPagesAction from '../../../../actions/landingPages/LandingPagesAction'
import LandingPagesState from '../../../../model/state/LandingPagesState';
import { AppState } from '../../../../model/state/AppState';

const LandingPagesEditModalContainer = (props: Props) => 
    <EditModalContainer
        title="Edit Landing Page"
        actions={ LandingPagesAction }
        {...props}>
            <LandingPagesForm />
    </EditModalContainer>

const mapStateToProps = (state: AppState): Props => ({
    state: state.landingPages.add
})

const LandingPagesEditModal = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(LandingPagesEditModalContainer);

export default LandingPagesEditModal;
