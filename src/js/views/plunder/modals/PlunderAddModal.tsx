import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../common/AddModalContainer';
import PlunderAction from '../../../actions/PlunderAction2'
import PlunderState from '../../../model/stateZ/plunder/PlunderState';
import PlunderForm from '../PlunderForm';
import { AppState } from '../../../model/stateZ/AppState';

const PlunderAddModal = (props: Props) => 
    <AddModalContainer
        title="New Plunder"
        action={ PlunderAction }
        {...props}>
            <PlunderForm {...props}/>
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.plunder
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(PlunderAddModal);