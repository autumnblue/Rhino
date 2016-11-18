import * as React from 'react';
import { ViewType } from '../../../model/state/page/ViewType';
import { Table } from '../common/table/Table';
import { Column } from '../common/table/Column';
import { ActionCol } from '../common/table/ActionCol';
import { Grid } from '../common/grid/Grid';
import LandingPageState from '../../../model/state2/landingPage/LandingPageState';

export class LandingPagesList extends React.Component<Props, void> {
    public render() {
         if(!this.props.data.forms) return null;

        return (
            this.props.view == ViewType.TABLE 
            ?
            <Table data={this.props.data.forms}>
                <Column head="Name" headKey="name" />
                <Column head="Type" headKey="pageType" />
                <Column head="Source URL" headKey="url" />
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
    data?: LandingPageState;
}
  
