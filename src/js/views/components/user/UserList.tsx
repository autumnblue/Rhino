import * as React from 'react';
import { ViewType } from '../../../model/state/page/ViewType';
import { Table } from '../common/table/Table';
import { Column } from '../common/table/Column';
import { ActionCol } from '../common/table/ActionCol';
import { Grid } from '../common/grid/Grid';

export class UserList extends React.Component<Props, void> {
    public render() {
        return (
            this.props.view == ViewType.TABLE 
            ?
            <Table data={this.props.list || []}>
                <Column head="Login" headKey="username" />
                <Column head="Email" headKey="email" />
                <Column head="First Name" headKey="firstName" />
                <Column head="Last Name" headKey="lastName" />
                <Column head="Is Active" bool headKey="isActive" />
                <ActionCol edit delete 
                    editCallback={this.props.onOpen}/>
            </Table>
            :
            <Grid data={this.props.list || []} openCb={this.props.onOpen}/> 
        );
    } 
}

interface Props {
    onOpen(id: number): void
    view: ViewType
    list: any;
}
  
