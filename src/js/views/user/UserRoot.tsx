import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import { CrudContainer, Props } from '../common/CrudContainer';
import UserAction from '../../actions/UserAction'
import UserState from '../../model/state/user/UserState';
import UserAddModal from './modals/UserAddModal';
import UserList from './UserList';
import UserEditModal from './modals/UserEditModal';

const UserRoot = (props: Props) => {
    return <div>
        <CrudContainer
            title="Users"
            action={ UserAction }
            {...props}>
                <UserList
                    view={props.state.view}
                    data={props.state.records} />
        </CrudContainer>
        <UserAddModal />
        <UserEditModal />
    </div>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.user
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(UserRoot);  