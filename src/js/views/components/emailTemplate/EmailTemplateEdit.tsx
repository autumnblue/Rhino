import * as React from 'react';
import AutoComplete from '../common/AutoComplete';
import Button from '../common/Button';
import Input from '../common/Input';
import FormProps from '../common/FormProps';
import EmailTemplateState from '../../../model/state2/emailTemplate/EmailTemplateState';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import TextEditor from '../common/TextEditor';
import TextArea from '../common/TextArea';

export default reduxForm.reduxForm({
    form: 'EmailTemplateEdit'
})(
(props: FormProps & EmailTemplateState) => {
    const form = props.forms.filter(form => form.id)[0];
    return    <form 
        onSubmit={ props.handleSubmit(props.submit) }>
            <div>
                <Field
                    value={form.name}
                    name="name"
                    label="Template Name"
                    component={ Input } />
            </div>
            <div>
                <Field
                    value={form.name}
                    name="fromHeader"
                    label="From Header"
                    component={ Input } />
            </div>
            <div>
                <Field
                    value={form.name}
                    name="subjectHeader"
                    label="Subject"
                    component={ Input } />
            </div>
            <div className="text-area">
                <Field
                    data={ form.template }
                    name="template"
                    label="Template"
                    component={ TextEditor } />
            </div>
            <Button type="submit">Submit</Button>
    </form>
}
);

