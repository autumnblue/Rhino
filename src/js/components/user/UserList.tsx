import * as React from 'react';
import { AppState } from '../../model/state/AppState';
import { UserState } from '../../model/state/UserState';
import { connect } from 'react-redux';
import { Table } from '../common/table/Table';
import { Column } from '../common/table/Column';
import { ActionCreator } from '../../actions/ActionCreator';
import { ActionCol } from '../common/table/ActionCol';

interface Props {
    viewUserList?(): void
    editUser?(): void
    deleteUser?(): void 
    state?: UserState
}

class Component extends React.Component<Props, void> {
    constructor(props) {
        super(props);
        this.props.viewUserList();
    }

    public render() {
        return (
            <Table data={this.props.state.data || []}>
                <Column head="Login" headKey="username" />
                <Column head="Email" headKey="email" />
                <Column head="First Name" headKey="first_name" />
                <Column head="Last Name" headKey="last_name" />
                <Column head="Is Active" headKey="is_active" />
                <ActionCol edit delete />
            </Table> 
        );
    } 
}

const mapStateToProps = (state: AppState): Props => {
    return {
        state: state.user
    }
}

const mapDispatchToProps = (dispatch): Props => {
    return { 
        viewUserList: () => { ActionCreator.viewUserList(dispatch) }
    }
}

export const UserList = connect(mapStateToProps, mapDispatchToProps)(Component);    
