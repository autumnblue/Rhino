import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import { CrudContainer, Props } from '../common/CrudContainer';
import LandingPageAction from '../../actions/LandingPageAction2'
import LandingPageState from '../../model/stateZ/landingPage/LandingPageState';
import LandingPageAddModal from './modals/LandingPageAddModal';
import LandingPageList from './LandingPageList';
import LandingPageEditModal from './modals/LandingPageEditModal';

const LandingPageRoot = (props: Props) => {
    return <div>
        <CrudContainer
            title="Landing Pages"
            action={ LandingPageAction }
            {...props}>
                <LandingPageList
                    view={props.state.view}
                    data={props.state.records} />
        </CrudContainer>
        <LandingPageAddModal />
        <LandingPageEditModal />
    </div>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.landingPage
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(LandingPageRoot);  