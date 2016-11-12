import * as React from 'react';
import AutoComplete from '../common/AutoComplete';
import Button from '../common/Button';
import Input from '../common/Input';
import FormProps from '../common/FormProps';
import ScheduleState from '../../../model/state2/schedule/ScheduleState';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import TextEditor from '../common/TextEditor';
import TextArea from '../common/TextArea';
import { RadioButtonGroup, RadioButton } from 'material-ui/RadioButton';
import { connect } from 'react-redux';
import TimePicker from 'material-ui/TimePicker';

let Form = reduxForm.reduxForm({
    form: 'ScheduleEdit'
})(
(props: FormProps & ScheduleState & { startSendValue: 'now' | 'after_amount' | 'specific_time' }) => {
    const form = props.forms.filter(form => form.id)[0];

    console.log(props);

    return    <form 
        onSubmit={ props.handleSubmit(props.submit) }>
            <div>
                <Field
                    value={form.name}
                    name="name"
                    label="Name"
                    component={ Input } />
            </div>
            <div>
                <Field
                    value={form.batchSize}
                    name="batchSize"
                    label="Batch size"
                    component={ Input } />
            </div>
                        <div>
                <Field
                    value={form.batchInterval}
                    name="batchInterval"
                    label="Batch interval"
                    component={ Input } />
            </div>
            <div>
                <Field
                    value={form.timeBetweenBatches}
                    name="timeBetweenBatches"
                    label="Sleep time"
                    component={ Input } />
            </div>

            <div>
            
            <Field name="startSend" defaultSelected={props.startSendValue} component={startSend => {
                console.log(startSend);
                return <RadioButtonGroup {...startSend}>
                    <RadioButton
                        value="now"
                        label="Now"
                    />
                    <RadioButton
                        value="after_amount"
                        label="After Amount"
                    />
                    <RadioButton
                        value="specific_time"
                        label="Specific Time"
                    />
                </RadioButtonGroup>
            }
            }/>
            
            </div>

            { props.startSendValue == 'after_amount'
            && 
            <div>
                <Field
                    value={form.startAt}
                    name="name"
                    label="After amount..."
                    component={ Input } />
            </div>
            }

            { props.startSendValue == 'specific_time'
            && 
            <div>
                <TimePicker
                    format="24hr"
                    hintText="Start sending at"
                    />
            </div>
            }
            <Button type="submit">Submit</Button>
    </form>
}
);

const selector = reduxForm.formValueSelector('ScheduleEdit')

//http://redux-form.com/6.0.0-alpha.11/examples/selectingFormValues/
Form = connect(
  state => {
    const startSendValue = selector(state, 'startSend')
    return {
      startSendValue,
    }
  }
)(Form)

export default Form

// <RadioButtonGroup defaultSelected={props.startSendValue}>
//                 <RadioButton
//                     value="now"
//                     label="Simple"
//                 />
//                 <RadioButton
//                     value="after_amount"
//                     label="Simple"
//                 />
//                 <RadioButton
//                     value="specific_time"
//                     label="Simple"
//                 />
//             </RadioButtonGroup>