import * as React from 'react';
import { connect } from 'react-redux';
import { EmailServerList } from '../../components/emailServer/EmailServerList';
import { Panel } from '../../components/common/Panel';
import { Control } from '../../components/common/Controls';
import { EmailServerAction } from'../../../actions/emailServer/EmailServerAction';
import { EmailServerPageState } from '../../../model/state/EmailServerState';
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
                <Panel title="Email Servers">
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
                    <EmailServerList 
                        onOpen={this.onEditOpen}
                        view={this.props.state.view}
                        list={this.props.state.list || []}/>

                </Panel>
            </div>        
        );
    }

    private initPage = () => {
        EmailServerAction.
            initPage(this.dispatch);
    }

    private onEditOpen = (id: number) => {
        // UserAction.
        //     openEdit(this.dispatch, id);
    }

    private onAddOpen = () => {
        EmailServerAction.
            openAdd(this.dispatch);
    }

    private onViewToggle = () => {
        EmailServerAction.
            toggleView(this.dispatch);
    }
}

interface Props {
    dispatch?
    state?: EmailServerPageState
}

const mapStateToProps = (state: AppState): Props => {
    return {
        state: state.emailServer.root
    }
};

const mapDispatchToProps = (dispatch): Props => ({
    dispatch: dispatch
});

export const EmailServerPage = connect(mapStateToProps, mapDispatchToProps)(Container);        