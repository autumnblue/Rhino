import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import { CrudContainer, Props } from '../common/CrudContainer';
import RedirectPageAction from '../../actions/RedirectPageAction2'
import RedirectPageState from '../../model/stateZ/redirectPage/RedirectPageState';
import RedirectPageAddModal from './modals/RedirectPageAddModal';
import RedirectPageList from './RedirectPageList';
import RedirectPageEditModal from './modals/RedirectPageEditModal';

const RedirectPageRoot = (props: Props) => {
    return <div>
        <CrudContainer
            title="Re-direct Pages"
            action={ RedirectPageAction }
            {...props}>
                <RedirectPageList
                    view={props.state.view}
                    data={props.state.records} />
        </CrudContainer>
        <RedirectPageAddModal />
        <RedirectPageEditModal />
    </div>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.redirectPage
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(RedirectPageRoot);  