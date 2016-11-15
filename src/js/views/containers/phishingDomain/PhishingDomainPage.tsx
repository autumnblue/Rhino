import * as React from 'react';
import { connect } from 'react-redux';
import { PhishingDomainList } from '../../components/phishingDomain/PhishingDomainList';
import { AppState } from '../../../model/state/AppState';
import { ListState } from '../../../model/state/page/ListState';
import PhishingDomainState from '../../../model/state/PhishingDomainState';
import PhishingDomainAddModal from './modals/PhishingDomainAddModal';
import PhishingDomainEditModal from './modals/PhishingDomainEditModal';
import { CrudContainer, Props } from '../crud/CrudContainer';
import PhishingDomainAction from '../../../actions/phishingDomain/PhishingDomainAction'

const PhishingDomainPageContainer = (props: Props) =>
<div>
    <CrudContainer
        title={ "Phishing Domains" }
        action={ PhishingDomainAction }
        {...props}>
            <PhishingDomainList 
                view={props.state.view}
                list={props.state.list || []}/>
    </CrudContainer>
        <PhishingDomainAddModal />
    <PhishingDomainEditModal />
    </div>

// const mapStateToProps = (state: AppState): Props => ({
//     state: state.phishingDomain.root
// })

const PhishingDomainPage = connect(
    null, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(PhishingDomainPageContainer);

export default PhishingDomainPage;     