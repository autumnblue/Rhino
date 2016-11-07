import * as React from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import FormProps from '../common/FormProps';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
const moment = require('moment-timezone'); 

const timezones = moment.tz.names().map(name => {
    return { text: name };
});

export default reduxForm.reduxForm({
    form: 'EmailServerAdd'
})(
(props: FormProps) =>
    <form 
        onSubmit={ this.props.handleSubmit(this.props.onSubmit) }>
            <div>
                <Field
                    name="name"
                      component={
                        <Input
                            label="Name" />
                    } />
            </div>
            <div>
                <Field
                    name="batchSize"
                    component={
                        <Input
                            label="Batch Size" />
                    } />
            </div>
            <div>
                <Field
                    name="batchInterval"
                    component={
                        <Input
                            label="Batch Interval" />
                    } />
            </div>
            <div>
                <Field
                    name="sleepTime"
                    component={
                        <Input
                            label="Sleep Time" />
                    } />
            </div>
            <Button type="submit">Submit</Button>
    </form>
);