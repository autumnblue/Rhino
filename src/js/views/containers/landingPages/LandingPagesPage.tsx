import * as React from 'react';
import { LandingPagesList } from '../../components/landingPages/LandingPagesList';
import { Panel } from '../../components/common/Panel';
import { Control } from '../../components/common/Controls';
import { LandingPagesAction } from'../../../actions/landingPages/LandingPagesAction';
import { AppState } from '../../../model/state/AppState';
import { ViewType } from '../../../model/state/page/ViewType';
// import { LandingPagesAddModal } from './modals/LandingPagesAddModal';
// import { LandingPagesEditModal } from './modals/LandingPagesEditModal';
import { CrudContainer, connect } from '../crud/CrudContainer'; 

export const LandingPagesPage =
connect((state) => ({ state: state.landingPages.root }),
    class Container extends CrudContainer {
        public getPanelTitle() { return 'Landing Pages' }

        public getActionCreator() { return LandingPagesAction }
        
        public jsx() {
            return <LandingPagesList 
                        onOpen={this.onEditOpen}
                        view={this.props.state.view}
                        list={this.props.state.list || []}/>
        }

        public modals() {
            return <div>

            </div>
        }
    }
);   