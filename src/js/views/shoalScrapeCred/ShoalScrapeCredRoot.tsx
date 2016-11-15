import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import { CrudContainer, Props } from '../common/CrudContainer';
import ShoalScrapeCredAction from '../../actions/ShoalScrapeCredAction2'
import ShoalScrapeCredState from '../../model/stateZ/shoalScrapeCred/ShoalScrapeCredState';
import ShoalScrapeCredAddModal from './modals/ShoalScrapeCredAddModal';
import ShoalScrapeCredList from './ShoalScrapeCredList';
import ShoalScrapeCredEditModal from './modals/ShoalScrapeCredEditModal';

const ShoalScrapeCredRoot = (props: Props) => {
    return <div>
        <CrudContainer
            title="ShoalScrape Credentials"
            action={ ShoalScrapeCredAction }
            {...props}>
                <ShoalScrapeCredList
                    view={props.state.view}
                    data={props.state.records} />
        </CrudContainer>
        <ShoalScrapeCredAddModal />
        <ShoalScrapeCredEditModal />
    </div>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.shoalScrapeCred
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ShoalScrapeCredRoot);  