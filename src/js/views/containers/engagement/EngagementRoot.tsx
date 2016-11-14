import * as React from 'react';
import { connect } from 'react-redux';
import { EngagementList } from '../../components/engagement/EngagementList';
import { AppState } from '../../../model/state/AppState';
import { ListState } from '../../../model/state/page/ListState';
import EngagementState from '../../../model/state2/engagement/EngagementState';
import { CrudContainer, Props } from '../crud/CrudContainer';
import EngagementAction from '../../../actions/EngagementAction'
// import EngagementAddModal from './modals/EngagementAddModal';
import EngagementEditModal from './modals/EngagementEditModal';

const EngagementRootContainer = (props: Props2) => {
    console.log(props);
    
    return <div>
        <CrudContainer
            title="Engagements"
            action={ EngagementAction }
            {...props}>
                <EngagementList 
                    view={props.state.view}
                    data={props.state || []}/>
        </CrudContainer>
        <EngagementEditModal />
    </div>
}


// const mapStateToProps = (app: AppState): Props2 => ({
//     state: app.engagement
// })

const EngagementRoot = connect(
    null, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(EngagementRootContainer);

export default EngagementRootContainer;     

interface Props2 {
    dispatch?
    state?: EngagementState
    title?: string
    action?: any
    children?: any
}