import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import { CrudContainer, Props } from '../common/CrudContainer';
import ShoalScrapeTaskAction from '../../actions/ShoalScrapeTaskAction2'
import ShoalScrapeTaskState from '../../model/stateZ/shoalScrapeTask/ShoalScrapeTaskState';
import ShoalScrapeTaskAddModal from './modals/ShoalScrapeTaskAddModal';
import ShoalScrapeTaskList from './ShoalScrapeTaskList';
import ShoalScrapeTaskEditModal from './modals/ShoalScrapeTaskEditModal';

const ShoalScrapeTaskRoot = (props: Props) => {
    return <div>
        <CrudContainer
            title="Shoal Scrape Tasks"
            action={ ShoalScrapeTaskAction }
            {...props}>
                <ShoalScrapeTaskList
                    view={props.state.view}
                    data={props.state.records} />
        </CrudContainer>
        <ShoalScrapeTaskAddModal />
        <ShoalScrapeTaskEditModal />
    </div>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.shoalScrapeTask
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ShoalScrapeTaskRoot);  