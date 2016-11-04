import * as React from 'react';
import { ScheduleAction } from '../../../actions/schedule/ScheduleAction';
import { ScheduleAdd } from '../../components/schedule/ScheduleAdd';
import { CrudContainer, connect } from '../crud/CrudContainer';
import { ScheduleList } from '../../components/schedule/ScheduleList';
import { ScheduleAddModal } from './modals/ScheduleAddModal';

export const SchedulePage =
connect((state) => ({ state: state.schedule.root }),
    class Container extends CrudContainer {
        public getPanelTitle() { return 'Schedules' }

        public getActionCreator() { return ScheduleAction }
        
        public jsx() {
            return <ScheduleList 
                        onOpen={this.onEditOpen}
                        view={this.props.state.view}
                        list={this.props.state.list || []}/>
        }

        public modals() {
            return <div>
                <ScheduleAddModal />
            </div>
        }
    }
);
