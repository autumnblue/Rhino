import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../common/AddModalContainer';
import ScraperUserAgentAction from '../../../actions/ScraperUserAgentAction2'
import ScraperUserAgentState from '../../../model/stateZ/scraperUserAgent/ScraperUserAgentState';
import ScraperUserAgentForm from '../ScraperUserAgentForm';
import { AppState } from '../../../model/stateZ/AppState';

const ScraperUserAgentAddModal = (props: Props) => 
    <AddModalContainer
        title="New Scraper User Agent"
        action={ ScraperUserAgentAction }
        {...props}>
            <ScraperUserAgentForm {...props}/>
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.scraperUserAgent
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ScraperUserAgentAddModal);