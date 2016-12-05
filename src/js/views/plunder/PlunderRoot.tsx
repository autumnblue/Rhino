import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/stateZ/AppState';
import { CrudContainer, Props } from '../common/CrudContainer';
import PlunderAction from '../../actions/PlunderAction2'
import PlunderState from '../../model/stateZ/plunder/PlunderState';
import PlunderAddModal from './modals/PlunderAddModal';
import PlunderList from './PlunderList';
import PlunderEditModal from './modals/PlunderEditModal';

const PlunderRoot = (props: Props) => {
    return <div>
        <CrudContainer
            title="Plunder"
            action={ PlunderAction }
            {...props}>
                <PlunderList
                    view={props.state.view}
                    data={props.state.records} />
        </CrudContainer>
        <PlunderAddModal />
        <PlunderEditModal />
    </div>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.plunder
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(PlunderRoot);  