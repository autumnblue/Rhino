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
                    name="host"
                      component={
                        <Input
                            label="Host" />
                    } />
            </div>
            <div>
                <Field
                    name="port"
                    component={
                        <Input
                            label="Port" />
                    } />
            </div>
            <div>
                <Field
                    name="login"
                    component={
                        <Input
                            label="login" />
                    } />
            </div>
            <div>
                <Field
                    name="password"
                    component={
                        <Input
                            label="password" />
                    } />
            </div>
            <Button type="submit">Submit</Button>
    </form>
);


