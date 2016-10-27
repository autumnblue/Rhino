import * as React from 'react';
import { connect } from 'react-redux';
import { CampaignList } from '../../components/campaign/CampaignList';
import { Panel } from '../../components/common/Panel';
import { Control } from '../../components/common/Controls';
import { CampaignAction } from'../../../actions/campaign/CampaignAction';
import { CampaignPageState } from '../../../model/state/CampaignState';
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
                <Panel title="Campaigns">
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
                    <CampaignList 
                        onOpen={this.onEditOpen}
                        view={this.props.state.view}
                        list={this.props.state.list || []}/>

                </Panel>
            </div>        
        );
    }

    private initPage = () => {
        CampaignAction.
            initPage(this.dispatch);
    }

    private onEditOpen = (id: number) => {
        // UserAction.
        //     openEdit(this.dispatch, id);
    }

    private onAddOpen = () => {
        CampaignAction.
            openAdd(this.dispatch);
    }

    private onViewToggle = () => {
        CampaignAction.
            toggleView(this.dispatch);
    }
}

interface Props {
    dispatch?
    state?: CampaignPageState
}

const mapStateToProps = (state: AppState): Props => {
    return {
        state: state.campaign.root
    }
};

const mapDispatchToProps = (dispatch): Props => ({
    dispatch: dispatch
});

export const CampaignPage = connect(mapStateToProps, mapDispatchToProps)(Container);        