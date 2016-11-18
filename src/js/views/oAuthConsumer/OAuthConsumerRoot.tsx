import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import { CrudContainer, Props } from '../common/CrudContainer';
import OAuthConsumerAction from '../../actions/OAuthConsumerAction2'
import OAuthConsumerState from '../../model/stateZ/oAuthConsumer/OAuthConsumerState';
import OAuthConsumerAddModal from './modals/OAuthConsumerAddModal';
import OAuthConsumerList from './OAuthConsumerList';
import OAuthConsumerEditModal from './modals/OAuthConsumerEditModal';

const OAuthConsumerRoot = (props: Props) => {
    return <div>
        <CrudContainer
            title="OAuth Consumers"
            action={ OAuthConsumerAction }
            {...props}>
                <OAuthConsumerList
                    view={props.state.view}
                    data={props.state.records} />
        </CrudContainer>
        <OAuthConsumerAddModal />
        <OAuthConsumerEditModal />
    </div>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.oAuthConsumer
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(OAuthConsumerRoot);  