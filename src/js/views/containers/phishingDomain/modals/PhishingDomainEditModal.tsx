import * as React from 'react';
import { AppState } from '../../../../model/state/AppState';
import { AddState} from '../../../../model/state/PhishingDomainState';
import { PhishingDomainEditAction } from '../../../../actions/phishingDomain/PhishingDomainEditAction';
import { Modal } from '../../../components/common/Modal';
import { PhishingDomainEdit } from '../../../components/phishingDomain/PhishingDomainEdit'; 
import { Control } from '../../../components/common/Controls';
import { EditModalContainer, connect } from '../../crud/EditModalContainer';

export const PhishingDomainEditModal =
connect((state) => ({ state: state.phishingDomain.edit }), 
    class Container extends EditModalContainer {
        public getModalTitle() { return 'Edit phishing domain'};
        public getActionCreator() { return PhishingDomainEditAction }

        public jsx() {
            return <PhishingDomainEdit 
                inputs={this.props.state.input}
                onDomainNameChange={this.onDomainNameChange} />
        }

        private onDomainNameChange = (event): void => {
            PhishingDomainEditAction
                .changeDomainNameInput(this.props.dispatch, event.target.value)
        }
    }
);
