import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../crud/AddModalContainer';
import RedirectPagesForm from '../../../components/redirectPages/RedirectPagesAdd';
import RedirectPagesAction from '../../../../actions/RedirectPagesAction'
import RedirectPagesState from '../../../../model/state2/redirectPage/RedirectPageState';
import { AppState } from '../../../../model/state/AppState';

const RedirectPagesAddModalContainer = (props: Props) => 
    <AddModalContainer
        title="New Redirect Page"
        action={ RedirectPagesAction }
        {...props}>
            <RedirectPagesForm {...props.state}/>
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.redirectPages
})

const RedirectPagesAddModal = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(RedirectPagesAddModalContainer);

export default RedirectPagesAddModal;