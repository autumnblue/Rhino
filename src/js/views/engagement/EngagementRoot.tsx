import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/stateZ/AppState';
import { CrudContainer, Props } from '../common/CrudContainer';
import EngagementAction from '../../actions/EngagementAction2'
import EngagementState from '../../model/stateZ/engagement/EngagementState';
import EngagementAddModal from './modals/EngagementAddModal';
import EngagementList from './EngagementList';
import EngagementEditModal from './modals/EngagementEditModal';
import ScheduleAddModal from '../schedule/modals/ScheduleAddModal';
import EmailTemplateAddModal from '../emailTemplate/modals/EmailTemplateAddModal';
import EmailServerAddModal from '../emailServer/modals/EmailServerAddModal';
import LandingPageAddModal from '../landingPage/modals/LandingPageAddModal';
import RedirectPageAddModal from '../redirectPage/modals/RedirectPageAddModal';

const EngagementRootContainer = (props: Props) => {
    return <div>
        <CrudContainer
            title="Engagements"
            action={ EngagementAction }
            {...props}>
                <EngagementList
                    view={props.state.view}
                    data={props.state.records} />
        </CrudContainer>
        <EngagementAddModal />
        <ScheduleAddModal />
        <EmailServerAddModal />
        <EmailTemplateAddModal />
        <LandingPageAddModal />
        <RedirectPageAddModal />
        <EngagementEditModal />
    </div>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.engagement
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(EngagementRootContainer);  