import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../common/AddModalContainer';
import ShoalScrapeCredAction from '../../../actions/ShoalScrapeCredAction2'
import ShoalScrapeCredState from '../../../model/stateZ/shoalScrapeCred/ShoalScrapeCredState';
import ShoalScrapeCredForm from '../ShoalScrapeCredForm';
import { AppState } from '../../../model/stateZ/AppState';

const ShoalScrapeCredAddModal = (props: Props) => 
    <AddModalContainer
        title="New ShoalScrape Credential"
        action={ ShoalScrapeCredAction }
        {...props}>
            <ShoalScrapeCredForm {...props}/>
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.shoalScrapeCred
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ShoalScrapeCredAddModal);