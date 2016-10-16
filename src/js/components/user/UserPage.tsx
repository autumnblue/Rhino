import * as React from 'react';
import { UserList } from '../user/UserList';
import { UserEditModal } from '../user/UserEditModal';
import { UserAddModal } from '../user/UserAddModal';
import { Panel } from '../common/Panel';
import { Control } from '../common/Controls';
import { connect } from 'react-redux';
import { UserAction } from'../../actions/UserAction';
import { UserPageState } from '../../model/state/UserState';
import { AppState } from '../../model/state/AppState';
import { ViewType } from '../../model/state/page/ViewType';

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
                <Panel title="Users">
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
                    <UserList 
                        onOpen={this.onEditOpen}
                        view={this.props.state.view}
                        list={this.props.state.list || []}/>

                </Panel>
                <UserEditModal />
                <UserAddModal />
            </div>        
        );
    }

    private initPage = () => {
        UserAction.
            initPage(this.dispatch);
    }

    private onEditOpen = (id: number) => {
        UserAction.
            openEdit(this.dispatch, id);
    }

    private onAddOpen = () => {
        UserAction.
            openAdd(this.dispatch);
    }

    private onViewToggle = () => {
        UserAction.
            toggleView(this.dispatch);
    }
}

interface Props {
    dispatch?
    state?: UserPageState
}

const mapStateToProps = (state: AppState): Props => {
    return {
        state: state.user.root
    }
};

const mapDispatchToProps = (dispatch): Props => ({
    dispatch: dispatch
});

export const UserPage = connect(mapStateToProps, mapDispatchToProps)(Container);        