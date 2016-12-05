import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/stateZ/AppState';
import { CrudContainer, Props } from '../common/CrudContainer';
import PhishingDomainAction from '../../actions/PhishingDomainAction2'
import PhishingDomainState from '../../model/stateZ/phishingDomain/PhishingDomainState';
import PhishingDomainAddModal from './modals/PhishingDomainAddModal';
import PhishingDomainList from './PhishingDomainList';
import PhishingDomainEditModal from './modals/PhishingDomainEditModal';

const PhishingDomainRoot = (props: Props) => {
    return <div>
        <CrudContainer
            title="Phishing Domains"
            action={ PhishingDomainAction }
            {...props}>
                <PhishingDomainList
                    view={props.state.view}
                    data={props.state.records} />
        </CrudContainer>
        <PhishingDomainAddModal />
        <PhishingDomainEditModal />
    </div>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.phishingDomain
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(PhishingDomainRoot);  