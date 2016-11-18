import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../crud/AddModalContainer';
import PhishingDomainForm from '../../../components/phishingDomain/PhishingDomainAdd';
import PhishingDomainAction from '../../../../actions/phishingDomain/PhishingDomainAction'
import PhishingDomainState from '../../../../model/state/PhishingDomainState';
import { AppState } from '../../../../model/state/AppState';

const PhishingDomainAddModalContainer = (props: Props) => 
    <AddModalContainer
        title="New Phishing Domain"
        action={ PhishingDomainAction }
        {...props}>
            <PhishingDomainForm {...props.state} />
    </AddModalContainer>

// const mapStateToProps = (state: AppState): Props => ({
//     state: state.phishingDomain.add
// })

const PhishingDomainAddModal = connect(
    null, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(PhishingDomainAddModalContainer);

export default PhishingDomainAddModal;