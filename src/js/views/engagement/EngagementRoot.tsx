import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import { CrudContainer, Props } from '../common/CrudContainer';
import EngagementAction from '../../actions/EngagementAction2'
import EngagementState from '../../model/stateZ/engagement/EngagementState';
import EngagementAddModal from './modals/EngagementAddModal';
import EngagementList from './EngagementList';
import EngagementEditModal from './modals/EngagementEditModal';

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