import * as React from 'react';
import { AddModalContainer2, connect } from '../../crud/AddModalContainer2';
import LandingPagesForm from '../form/LandingPagesForm';
import LandingPagesAction from '../../../../actions/landingPages/LandingPagesAction'
import LandingPagesState from '../../../../model/state/LandingPagesState';

export const LandingPagesAddModal = 
    connect(state => ({ state: state.landingPages.add }),
        (state: LandingPagesState) => {
            console.log(state);

            return <AddModalContainer2
                dispatch={ state['dispatch']}
                state={ state }
                title="New Landing Page"
                actions={ LandingPagesAction }>
                    <LandingPagesForm />
            </AddModalContainer2>
        });