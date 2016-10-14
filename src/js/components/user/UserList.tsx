import * as React from 'react';
import { AppState } from '../../model/state/AppState';
import { UserListState } from '../../model/state/UserState';
import { connect } from 'react-redux';
import { Table } from '../common/table/Table';
import { Column } from '../common/table/Column';
import { UserAction } from '../../actions/UserAction';
import { ActionCol } from '../common/table/ActionCol';
import { Grid } from '../common/grid/Grid';

class Component extends React.Component<Props, void> {
    private dispatch;

    constructor(props) {
        super(props);
        this.dispatch = this.props.dispatch;
        this.viewUserList();
    }

    public render() {
        return (
            <Grid data={this.props.state.data || []} openCb={this.openCb}/>
            // <Table data={this.props.state.data || []}>
            //     <Column head="Login" headKey="username" />
            //     <Column head="Email" headKey="email" />
            //     <Column head="First Name" headKey="firstName" />
            //     <Column head="Last Name" headKey="lastName" />
            //     <Column head="Is Active" bool headKey="isActive" />
            //     <ActionCol edit delete 
            //         editCallback={this.editCb}/>
            // </Table> 
        );
    } 

    private openCb = (id: number): void => {
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
