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
import Select from '../common/Select';
import MenuItem from 'material-ui/MenuItem';

let Form = reduxForm.reduxForm({
    form: 'ScheduleAdd'
})(
(props: FormProps & ScheduleState & { startTypeValue: 'now' | 'after_amount' | 'specific_time' }) => {
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
            
            <Field
                initValue={ form.startType }
                name="startType"
                label="Start Sending"
                component={ Select }>
                    <MenuItem value={'now'} primaryText="Now" />
                    <MenuItem value={'after_amount'} primaryText="After an amount of time" />
                    <MenuItem value={'specific_time'} primaryText="At a specific time" />
            </Field>
            }/>
            
            </div>

            { props.startTypeValue && props.startTypeValue == 'after_amount'
            && 
            <div>
                <Field
                    value={form.startAt}
                    name="startAt"
                    label="After amount..."
                    component={ Input } />
            </div>
            }

            { props.startTypeValue && props.startTypeValue == 'specific_time'
            && 
            <div>
                <Field
                    value={form.startAt}
                    name="startAt"
                    component={
                        (props) => <TimePicker
                            format="24hr"
                            hintText="Start sending at"
                            onChange={
                                (event, value) => props.input.onChange(value) }
                            />
                    }
                    />
            </div>
            }
            <Button type="submit">Submit</Button>
    </form>
}
);

const selector = reduxForm.formValueSelector('ScheduleAdd')

//http://redux-form.com/6.0.0-alpha.11/examples/selectingFormValues/
Form = connect(
  state => {
    const startTypeValue = selector(state, 'startType')
    return {
      startTypeValue,
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