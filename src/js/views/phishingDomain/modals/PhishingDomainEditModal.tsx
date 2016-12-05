import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../common/EditModalContainer';
import PhishingDomainAction from '../../../actions/PhishingDomainAction2'
import PhishingDomainState from '../../../model/stateZ/phishingDomain/PhishingDomainState';
import PhishingDomainForm from '../PhishingDomainForm';
import { AppState } from '../../../model/stateZ/AppState';

const PhishingDomainEditModal = (props: Props) => {
    return <EditModalContainer
        title="Edit Phishing Domain"
        action={ PhishingDomainAction }
        {...props}>
            <PhishingDomainForm />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.phishingDomain
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(PhishingDomainEditModal);
