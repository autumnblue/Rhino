import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../common/EditModalContainer';
import LandingPageAction from '../../../actions/LandingPageAction2'
import LandingPageState from '../../../model/stateZ/landingPage/LandingPageState';
import LandingPageForm from '../LandingPageForm';
import { AppState } from '../../../model/state/AppState';
import Editor from '../../common/fields/TextEditor';

const LandingPageEditModal = (props: Props) => {
    return <div> 
    <EditModalContainer
        title="Edit Landing Page"
        action={ LandingPageAction }
        {...props}>
            <LandingPageForm />
    </EditModalContainer>
    </div> 
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.landingPage
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(LandingPageEditModal);
