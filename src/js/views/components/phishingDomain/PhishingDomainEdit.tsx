import * as React from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import FormProps from '../common/FormProps';
import PhishingDomainState from '../../../model/state/PhishingDomainState';

const reduxForm = require('redux-form');
const Field = reduxForm.Field;
const moment = require('moment-timezone'); 

const timezones = moment.tz.names().map(name => {
    return { text: name };
});

export default reduxForm.reduxForm({
    form: 'PhishingDomainEdit'
})(
(props: FormProps & PhishingDomainState) =>
    <form 
        onSubmit={ props.handleSubmit(props.submit) }>
            <div>
                <Field
                    label="Domain Name"
                    initValue={ props.domainName }
                    name="domainName"
                      component={ Input } />
            </div>
           
            <Button type="submit">Submit</Button>
    </form>
);