import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../crud/EditModalContainer';
import PhishingDomainForm from '../../../components/phishingDomain/PhishingDomainEdit';
import PhishingDomainAction from '../../../../actions/phishingDomain/PhishingDomainAction'
import PhishingDomainState from '../../../../model/state/PhishingDomainState';
import { AppState } from '../../../../model/state/AppState';

const PhishingDomainEditModalContainer = (props: Props) => 
    <EditModalContainer
        title="Edit Landing Page"
        actions={ PhishingDomainAction }
        {...props}>
            <PhishingDomainForm />
    </EditModalContainer>

const mapStateToProps = (state: AppState): Props => ({
    state: state.phishingDomain.add
})

const PhishingDomainEditModal = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(PhishingDomainEditModalContainer);

export default PhishingDomainEditModal;
