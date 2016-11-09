import * as React from 'react';
import AutoComplete from '../common/AutoComplete';
import Button from '../common/Button';
import Input from '../common/Input';
import FormProps from '../common/FormProps';
import CampaignState from '../../../model/state/CampaignState';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;

export default reduxForm.reduxForm({
    form: 'CampaignAdd'
})(
(props: FormProps & CampaignState) => 
    <form 
        onSubmit={ props.handleSubmit(props.submit) }>
            <div>
                <Field
                    name="timezone"
                    label="Default Timezone"
                    data={ [] }
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
                    name="url"
                    label="URL"
                    component={ Input } />
            </div>
            <Button type="submit">Submit</Button>
    </form>
);


