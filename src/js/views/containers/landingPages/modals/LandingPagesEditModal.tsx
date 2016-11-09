import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../crud/EditModalContainer';
import LandingPagesForm from '../../../components/landingPages/LandingPagesEdit';
import LandingPagesAction from '../../../../actions/LandingPagesAction'
import LandingPagesState from '../../../../model/state/LandingPagesState';
import { AppState } from '../../../../model/state/AppState';

const LandingPagesEditModalContainer = (props: Props) => 
    <EditModalContainer
        title="Edit Landing Page"
        action={ LandingPagesAction }
        {...props}>
            <LandingPagesForm {...props.state} />
    </EditModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.landingPages
})

const LandingPagesEditModal = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(LandingPagesEditModalContainer);

export default LandingPagesEditModal;
