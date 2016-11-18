import * as React from 'react';
import { ViewType } from '../../../model/state/page/ViewType';
import { Table } from '../common/table/Table';
import { Column } from '../common/table/Column';
import { ActionCol } from '../common/table/ActionCol';
import { Grid } from '../common/grid/Grid';
import EngagementState from '../../../model/state2/engagement/EngagementState';

export class EngagementList extends React.Component<Props, void> {
    public render() {
        // this.props.data.forms.forEach(form => { form. }
        // )

        if(!this.props.data.forms) return null;

        return (
            this.props.view == ViewType.TABLE 
            ?
            <Table data={this.props.data.forms}>
                <Column head="State" headKey="state" />
                <Column head="Title" headKey="name" />
                <Column head="Description" headKey="description" />
                <Column head="Campaign" headKey="campaign" dependee />
                <Column head="Landing Page" headKey="landingPage" dependee />
                <ActionCol edit delete 
                    editCallback={this.props.onOpen}/>
            </Table>
            :
            <Grid 
                data={this.props.data.forms} 
                label={ (datum) => {
                    return `${datum['name']}`;
                } }
                openCb={this.props.onOpen}/> 
        );
    } 
}

interface Props {
    onOpen(id: number): void
    view: ViewType
    list: any;
    data?: EngagementState;
}
  
