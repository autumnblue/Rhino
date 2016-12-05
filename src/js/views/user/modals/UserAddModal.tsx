import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../common/AddModalContainer';
import UserAction from '../../../actions/UserAction2'
import UserState from '../../../model/stateZ/user/UserState';
import UserForm from '../UserForm';
import { AppState } from '../../../model/stateZ/AppState';

const UserAddModal = (props: Props) => 
    <AddModalContainer
        title="New User"
        action={ UserAction }
        {...props}>
            <UserForm {...props}/>
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.user
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(UserAddModal);