import * as React from 'react';
import { ViewType } from '../../../model/state/page/ViewType';
import { Table } from '../common/table/Table';
import { Column } from '../common/table/Column';
import { ActionCol } from '../common/table/ActionCol';
import { Grid } from '../common/grid/Grid';

export class LandingPagesList extends React.Component<Props, void> {
    public render() {
        return (
            this.props.view == ViewType.TABLE 
            ?
            <Table data={this.props.list || []}>
                <Column head="Name" headKey="name" />
                <Column head="Type" headKey="page_type" />
                <Column head="Source URL" headKey="url" />
                <ActionCol edit delete 
                    editCallback={this.props.onOpen}/>
            </Table>
            :
            <Grid 
                data={this.props.list || []} 
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
}
  
