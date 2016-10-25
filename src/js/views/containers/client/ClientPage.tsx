import * as React from 'react';
import { connect } from 'react-redux';
import { ClientList } from '../../components/client/ClientList';
import { ClientAddModal } from './modals/ClientAddModal';
import { Panel } from '../../components/common/Panel';
import { Control } from '../../components/common/Controls';
import { ClientAction } from'../../../actions/client/ClientAction';
import { ClientPageState } from '../../../model/state/ClientState';
import { AppState } from '../../../model/state/AppState';
import { ViewType } from '../../../model/state/page/ViewType';

export class Container extends React.Component<Props, void> {
    private dispatch;
    
    constructor(props) {
        super(props);
        this.dispatch = this.props.dispatch;
        this.initPage();
    }

    public render() {
        const viewIcon = this.props.state.view == ViewType.TABLE
            ? <span className="glyphicon glyphicon-th"></span>
            : <span className="glyphicon glyphicon-th-list"></span>

        return (
            <div>
                <Panel title="Clients">
                    <Control>
                        <button onClick={this.onAddOpen}>
                            <span className="glyphicon glyphicon-plus"></span>
                        </button>
                    </Control>
                    <Control>
                        <button onClick={this.onViewToggle}>
                            { viewIcon }
                        </button>
                    </Control>
                    <ClientList 
                        onOpen={this.onEditOpen}
                        view={this.props.state.view}
                        list={this.props.state.list || []}/>

                </Panel>
                <ClientAddModal />
            </div>        
        );
    }

    private initPage = () => {
        ClientAction.
            initPage(this.dispatch);
    }

    private onEditOpen = (id: number) => {
        // UserAction.
        //     openEdit(this.dispatch, id);
    }

    private onAddOpen = () => {
        ClientAction.
            openAdd(this.dispatch);
    }

    private onViewToggle = () => {
        ClientAction.
            toggleView(this.dispatch);
    }
}

interface Props {
    dispatch?
    state?: ClientPageState
}

const mapStateToProps = (state: AppState): Props => {
    return {
        state: state.client.root
    }
};

const mapDispatchToProps = (dispatch): Props => ({
    dispatch: dispatch
});

export const ClientPage = connect(mapStateToProps, mapDispatchToProps)(Container);        