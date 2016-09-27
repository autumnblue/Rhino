import * as React from 'react';
import { CampaignState } from '../../model/state/CampaignState';
import { connect } from 'react-redux';
import { Table } from '../common/table/Table';
import { Column } from '../common/table/Column';
import { ActionCreator } from '../../actions/ActionCreator';

interface Props {
    dispatch: Function,
    campaigns: CampaignState[]
}

class Component extends React.Component<Props, void> {
    constructor() {
        super();

        //dispatch(ActionCreator.viewClientList());
    }

    public render() {
        return (
            <Table data={this.props.campaigns}>
                <Column head="Title" headKey="title" />
                <Column head="Description" headKey="description" />
                <Column head="Client" headKey="client" />
            </Table>        
        );
    }

    static mapStateToProps(state: CampaignState[]) {
        return state;
    }
}

export const CampaignList = connect(Component.mapStateToProps)(Component);    
