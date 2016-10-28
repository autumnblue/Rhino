import * as React from 'react';
import { AppState } from '../../../../model/state/AppState';
import { AddState} from '../../../../model/state/PhishingDomainState';
import { PhishingDomainAddAction } from '../../../../actions/phishingDomain/PhishingDomainAddAction';
import { Modal } from '../../../components/common/Modal';
import { PhishingDomainAdd } from '../../../components/phishingDomain/PhishingDomainAdd';
import { Control } from '../../../components/common/Controls';
import { AddModalContainer, connect } from '../../crud/AddModalContainer';

export const PhishingDomainAddModal =
connect((state) => ({ state: state.phishingDomain.add }), 
    class Container extends AddModalContainer {
        public getModalTitle() { return 'New phishing domain'};
        public getActionCreator() { return PhishingDomainAddAction }

        public jsx() {
            return <PhishingDomainAdd 
                inputs={this.props.state.input}
                onDomainNameChange={this.onDomainNameChange} />
        }

        private onDomainNameChange = (event): void => {
            PhishingDomainAddAction
                .changeDomainNameInput(this.props.dispatch, event.target.value)
        }
    }
);
