import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import { CrudContainer, Props } from '../common/CrudContainer';
import ScraperUserAgentAction from '../../actions/ScraperUserAgentAction'
import ScraperUserAgentState from '../../model/state/scraperUserAgent/ScraperUserAgentState';
import ScraperUserAgentAddModal from './modals/ScraperUserAgentAddModal';
import ScraperUserAgentList from './ScraperUserAgentList';
import ScraperUserAgentEditModal from './modals/ScraperUserAgentEditModal';

const ScraperUserAgentRoot = (props: Props) => {
    return <div>
        <CrudContainer
            title="Scraper User Agents"
            action={ ScraperUserAgentAction }
            {...props}>
                <ScraperUserAgentList
                    view={props.state.view}
                    data={props.state.records} />
        </CrudContainer>
        <ScraperUserAgentAddModal />
        <ScraperUserAgentEditModal />
    </div>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.scraperUserAgent
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ScraperUserAgentRoot);  