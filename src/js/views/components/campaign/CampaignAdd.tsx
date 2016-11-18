import * as React from 'react';
import AutoComplete from '../common/AutoComplete';
import Button from '../common/Button';
import Input from '../common/Input';
import FormProps from '../common/FormProps';
import CampaignState from '../../../model/state2/campaign/CampaignState';
const reduxForm = require('redux-form');
import TextArea from '../common/TextArea';
const Field = reduxForm.Field;

export default reduxForm.reduxForm({
    form: 'CampaignEdit'
})(
(props: FormProps & CampaignState) => {
    const form = props.forms.filter(form => form.id)[0];
    return    <form 
        onSubmit={ props.handleSubmit(props.submit) }>
            <div>
                <Field
                    name="client"
                    label="Clients"
                    data={ props.dependencies.clients }
                    component={ AutoComplete } /> 
            </div>
            <div>
                <Field
                    name="name"
                    label="Name"
                    component={ Input } />
            </div>
            <div>
                <Field
                    name="description"
                    label="Description"
                    component={ TextArea } />
            </div>
            <div>
                <Field
                    name="url"
                    label="URL"
                    component={ Input } />
            </div>
            <Button type="submit">Submit</Button>
    </form>
}
);



