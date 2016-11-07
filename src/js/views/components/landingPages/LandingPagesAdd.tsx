import * as React from 'react';
import FormProps from '../common/FormProps';
import validate from '../../../validation/client/landingPages/LandingPagesFormClientValidator'
import warn from '../../../validation/client/landingPages/LandingPagesFormClientWarner'
const reduxForm = require('redux-form');
const Field = reduxForm.Field;

export default reduxForm.reduxForm({
    form: 'LandingPagesAdd',
    validate,
    warn
})(
(props: FormProps) => 
    <form 
        onSubmit={ props.handleSubmit(props.submit) }>
            <div>
                <label>Test Type</label>
                <div>
                <Field
                    name="test"
                    component="input" />
                </div>
            </div>
            <div>
                <label>Date</label>
                <div>
                <Field
                    name="date"
                    component="input" />
                </div>
            </div>
            <div>
                <label>Time</label>
                <div>
                <Field
                    name="time"
                    component="input" />
                </div>
            </div>
            <button type="submit">Submit</button>
    </form>
);



