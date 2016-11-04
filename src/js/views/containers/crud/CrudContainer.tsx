import * as React from 'react';
import * as react_redux from 'react-redux';
import { Modal } from '../../components/common/Modal';
import { Control } from '../../components/common/Controls';
import { ListState} from '../../../model/state/page/ListState';
import { AppState } from '../../../model/state/AppState';
import { CrudActionCreator } from '../../../actions/crud/CrudActionCreator'
import { Service } from '../../../service/Service';
import { ViewType } from '../../../model/state/page/ViewType';
import { Panel } from '../../components/common/Panel';

export abstract class CrudContainer extends React.Component<Props, void> {
    constructor(props) {
        super(props);
        this.initPage();
    }

    public abstract getPanelTitle(): string;
    public abstract getActionCreator(): CrudActionCreator<Service>;
    public abstract jsx(): React.ReactElement<any>;
    public abstract modals(): React.ReactElement<any>;

    public render() {
         const viewIcon = this.props.state.view == ViewType.TABLE
            ? <span className="glyphicon glyphicon-th"></span>
            : <span className="glyphicon glyphicon-th-list"></span>

        return (
            <div>
                <Panel title={ this.getPanelTitle() }>
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

                    { this.jsx() }

                </Panel>
                
                { this.modals() }

            </div>        
        );
    }

    private initPage = () => {
        this.getActionCreator()
            .initPage(this.props.dispatch);
    }

    protected onEditOpen = (id: number) => {
        this.getActionCreator()
            .openEdit(this.props.dispatch, id);
    }

    private onAddOpen = () => {
        this.getActionCreator()
            .openAdd(this.props.dispatch)
    }

    private onViewToggle = () => {
        this.getActionCreator()
            .toggleView(this.props.dispatch)
    }
}

interface Props {
    dispatch?
    state?: ListState<any>
}

const mapDispatchToProps = (dispatch): Props => ({
    dispatch: dispatch
})

export const connect = (
    mapStateToProps: (state: AppState) => Props, 
    containerCls: React.ComponentClass<Props>) => {
        return react_redux.connect(mapStateToProps, mapDispatchToProps)(containerCls)
}
