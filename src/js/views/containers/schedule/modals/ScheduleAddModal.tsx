import * as React from 'react';
import { AppState } from '../../../../model/state/AppState';
import { AddState} from '../../../../model/state/ScheduleState';
import { ScheduleAddAction } from '../../../../actions/schedule/ScheduleAddAction';
import { Modal } from '../../../components/common/Modal';
import { ScheduleAdd } from '../../../components/schedule/ScheduleAdd';
import { Control } from '../../../components/common/Controls';
import { AddModalContainer, connect } from '../../crud/AddModalContainer';

export const ScheduleAddModal =
connect((state) => ({ state: state.schedule.add }), 
    class Container extends AddModalContainer {
        public getModalTitle() { return 'New schedule'};
        public getActionCreator() { return ScheduleAddAction }

        public jsx() {
            return <ScheduleAdd 
                inputs={this.props.state.input}
                onNameChange={this.onNameChange} 
                onBatchSizeChange={this.onBatchSizeChange}
                onBatchIntervalChange={this.onBatchIntervalChange}
                onSleepTimeChange={this.onSleepTimeChange} />
        }

        private onNameChange = (event): void => {
            ScheduleAddAction
                .changeNameInput(this.props.dispatch, event.target.value)
        }

        private onBatchSizeChange = (event): void => {
            ScheduleAddAction
                .changeBatchSizeInput(this.props.dispatch, event.target.value)
        }

        private onBatchIntervalChange = (event): void => {
            ScheduleAddAction
                .changeBatchIntervalInput(this.props.dispatch, event.target.value)
        }

        private onSleepTimeChange = (event): void => {
            ScheduleAddAction
                .changeSleepTimeInput(this.props.dispatch, event.target.value)
        }
    }
);
