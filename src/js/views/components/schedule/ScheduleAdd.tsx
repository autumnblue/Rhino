import * as React from 'react';
import { Form } from '../../../model/state/ScheduleState';
import { InputMessageWrapper } from '../common/message/InputMessageWrapper';

export class ScheduleAdd extends React.Component<Props, void> {
    public render() {
        const inputs = this.props.inputs

        return (
            <form>
                <label>Name</label>
                <InputMessageWrapper msg={inputs.name.validationMsg}>
                    <input 
                        type="text"
                        value={inputs.name.value} 
                        onChange={this.props.onNameChange} />
                </InputMessageWrapper>

                <label>Batch size</label>
                <InputMessageWrapper msg={inputs.batchSize.validationMsg}>
                    <input 
                        type="text"
                        value={inputs.batchSize.value} 
                        onChange={this.props.onBatchSizeChange} />
                </InputMessageWrapper>

                <label>Batch interval</label>
                <InputMessageWrapper msg={inputs.batchInterval.validationMsg}>
                    <input 
                        type="text"
                        value={inputs.batchInterval.value} 
                        onChange={this.props.onBatchIntervalChange} />
                </InputMessageWrapper>

                <label>Sleep time</label>
                <InputMessageWrapper msg={inputs.sleepTime.validationMsg}>
                    <input 
                        type="text"
                        value={inputs.sleepTime.value} 
                        onChange={this.props.onSleepTimeChange} />
                </InputMessageWrapper>
            </form>
        );
    }
}

interface Props {
    inputs: Form
    onNameChange(event): void
    onBatchSizeChange(event): void
    onBatchIntervalChange(event): void
    onSleepTimeChange(event): void
}