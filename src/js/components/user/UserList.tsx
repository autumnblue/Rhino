import * as React from 'react';
import { AppState } from '../../model/state/AppState';
import { UserListState } from '../../model/state/UserState';
import { connect } from 'react-redux';
import { Table } from '../common/table/Table';
import { Column } from '../common/table/Column';
import { UserAction } from '../../actions/UserAction';
import { ActionCol } from '../common/table/ActionCol';

class Component extends React.Component<Props, void> {
    private dispatch;

    constructor(props) {
        super(props);
        this.dispatch = this.props.dispatch;
        this.viewUserList();
    }

    public render() {
        return (
            <Table data={this.props.state.data || []}>
                <Column head="Login" headKey="username" />
                <Column head="Email" headKey="email" />
                <Column head="First Name" headKey="first_name" />
                <Column head="Last Name" headKey="last_name" />
                <Column head="Is Active" headKey="is_active" />
                <ActionCol edit delete 
                    editCallback={this.editCb}/>
            </Table> 
        );
    } 

    private editCb = (id: number): void => {
        UserAction.edit(this.dispatch, id);
    }

    private viewUserList = (): void => { 
        UserAction.viewUserList(this.dispatch) 
    }
}

interface Props {
    dispatch?
    state?: UserListState
}

const mapStateToProps = (state: AppState): Props => ({
    state: state.user.list
});

const mapDispatchToProps = (dispatch): Props => ({
    dispatch: dispatch
});

export const UserList = connect(mapStateToProps, mapDispatchToProps)(Component);    
