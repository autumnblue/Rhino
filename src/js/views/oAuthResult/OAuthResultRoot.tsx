import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/stateZ/AppState';
import { CrudContainer, Props } from '../common/CrudContainer';
import OAuthResultAction from '../../actions/OAuthResultAction2'
import OAuthResultState from '../../model/stateZ/oAuthResult/OAuthResultState';
import OAuthResultAddModal from './modals/OAuthResultAddModal';
import OAuthResultList from './OAuthResultList';
import OAuthResultEditModal from './modals/OAuthResultEditModal';

const OAuthResultRoot = (props: Props) => {
    return <div>
        <CrudContainer
            title="OAuth Results"
            action={ OAuthResultAction }
            {...props}>
                <OAuthResultList
                    view={props.state.view}
                    data={props.state.records} />
        </CrudContainer>
        <OAuthResultAddModal />
        <OAuthResultEditModal />
    </div>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.oAuthResult
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(OAuthResultRoot);  