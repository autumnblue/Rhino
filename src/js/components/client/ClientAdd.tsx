import * as React from 'react';
import { ClientState } from '../../model/state/ClientState';
import { connect } from 'react-redux';
import { Table } from '../common/table/Table';
import { Column } from '../common/table/Column';
import { ActionCreator } from '../../actions/ActionCreator';
import { AppState } from '../../model/state/AppState';

interface Props {
    dispatch: Function,
    clients: ClientState[]
}

class Component extends React.Component<Props, void> {
    constructor() {
        super();

        //dispatch(ActionCreator.viewClientList());
    }

    public render() {
        return (
            <Table data={this.props.clients}>
                <Column head="Name" headKey="name" />
                <Column head="URL" headKey="url" />
                <Column head="Default Timezone" headKey="timezone" />
            </Table>        
        );
    }
}

export const ClientAdd = connect(state => { return state; })(Component);    
