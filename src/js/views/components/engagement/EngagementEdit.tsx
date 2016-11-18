import * as React from 'react';
import AutoComplete from '../common/AutoComplete';
import Button from '../common/Button';
import Input from '../common/Input';
import TextArea from '../common/TextArea';
import FormProps from '../common/FormProps';
import EngagementState from '../../../model/state2/engagement/EngagementState';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;

export default reduxForm.reduxForm({
    form: 'EngagementEdit'
})(
(props: FormProps & EngagementState ) => {

    const form = props.forms.filter(form => form.id)[0];

    return <form 
        onSubmit={ props.handleSubmit(props.submit) }>
            <div>
                <Field
                    initValue={ form.campaign }
                    name="campaign"
                    label="Campaign"
                    data={ props.dependencies.campaigns }
                    component={ AutoComplete } /> 
            </div>
            <div>
                <Field
                    initValue={ form.name }
                    name="name"
                    label="Title"
                    component={ Input } />
            </div>
            <div>
                <Field
                    initValue={ form.description }
                    name="description"
                    label="Description"
                    component={ TextArea } />
            </div>
            <div>
                <Field
                    initValue={ form.landingPage }
                    name="landingPage"
                    label="Landing Page URL"
                    data={ props.dependencies.landingPages }
                    component={ AutoComplete } /> 
            </div>
            <div>
                <Field
                    initValue={ form.schedule }
                    name="schedule"
                    label="Schedule"
                    data={ props.dependencies.schedules }
                    component={ AutoComplete } /> 
            </div>
            <div>
                <Field
                    initValue={ form.emailServer }
                    name="emailServer"
                    label="Send Using"
                    data={ props.dependencies.emailServers }
                    component={ AutoComplete } /> 
            </div>
            <div>
                <Field
                    initValue={ form.landingPage }
                    name="landingPage"
                    label="Landing Page"
                    data={ props.dependencies.landingPages }
                    component={ AutoComplete } /> 
            </div>
            <div>
                <Field
                    initValue={ form.redirectPage }
                    name="redirectPage"
                    label="Redirect Page"
                    data={ props.dependencies.redirectPages }
                    component={ AutoComplete } /> 
            </div>
           
            <Button type="submit">Submit</Button>
    </form>
}
);
