import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../crud/EditModalContainer';
import RedirectPagesForm from '../../../components/redirectPages/RedirectPagesEdit';
import RedirectPagesAction from '../../../../actions/RedirectPagesAction'
import RedirectPagesState from '../../../../model/state2/redirectPage/RedirectPageState';
import { AppState } from '../../../../model/state/AppState';

const RedirectPagesEditModalContainer = (props: Props) => 
    <EditModalContainer
        title="Edit Redirect Page"
        action={ RedirectPagesAction }
        {...props}>
            <RedirectPagesForm {...props.state} />
    </EditModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.redirectPages
})

const RedirectPagesEditModal = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(RedirectPagesEditModalContainer);

export default RedirectPagesEditModal;
