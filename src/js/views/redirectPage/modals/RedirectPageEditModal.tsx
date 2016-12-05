import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../common/EditModalContainer';
import RedirectPageAction from '../../../actions/RedirectPageAction2'
import RedirectPageState from '../../../model/stateZ/redirectPage/RedirectPageState';
import RedirectPageForm from '../RedirectPageForm';
import { AppState } from '../../../model/stateZ/AppState';

const RedirectPageEditModal = (props: Props) => {
    return <EditModalContainer
        title="Edit Re-direct Page"
        action={ RedirectPageAction }
        {...props}>
            <RedirectPageForm />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.redirectPage
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(RedirectPageEditModal);
