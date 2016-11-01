import * as React from 'react';
import { AppState } from '../../../../model/state/AppState';
import { LandingPagesAddAction } from '../../../../actions/landingPages/LandingPagesAddAction';
import { Modal } from '../../../components/common/Modal';
import LandingPagesAdd from '../../../components/landingPages/LandingPagesAdd';
import { Control } from '../../../components/common/Controls';
import { AddModalContainer, connect } from '../../crud/AddModalContainer';

export const LandingPagesAddModal =
connect((state) => ({ state: state.landingPages.add }), 
    class Container extends AddModalContainer {
        public getModalTitle() { return 'New phishing domain'};
        public getActionCreator() { return null }

        public jsx() {
            return <LandingPagesAdd 
                onSubmit={this.onSubmit2} />
        }

        private onSubmit2 = (v) => {
            console.log(v);
        }
    }
);
