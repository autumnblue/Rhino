import * as React from 'react';
import AutoComplete from '../common/AutoComplete';
import Button from '../common/Button';
import Input from '../common/Input';
import FormProps from '../common/FormProps';
import ClientState from '../../../model/state/ClientState';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
const moment = require('moment-timezone'); 

const timezones = moment.tz.names();

export default reduxForm.reduxForm({
    form: 'ClientAdd'
})(
(props: FormProps & ClientState) =>
    <form 
        onSubmit={ props.handleSubmit(props.submit) }>
            <div>
                <Field
                    initValue={ props.name }
                    name="name"
                    label="Name"
                    component={ Input } />
            </div>
            <div>
                <Field
                    initValue={ props.url }
                    name="url"
                    label="URL"
                    component={ Input } />
            </div>
            
            <div>
                <Field
                    initValue={ props.timezone }
                    name="timezone"
                    label="Default Timezone"
                    data={ timezones }
                    component={ AutoComplete } /> 
            </div>
            <Button type="submit">Submit</Button>
    </form>
);