import * as React from 'react';
import AutoComplete from '../common/AutoComplete';
import Button from '../common/Button';
import Input from '../common/Input';
import FormProps from '../common/FormProps';
import EmailServerState from '../../../model/state2/emailServer/EmailServerState';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import TextEditor from '../common/TextEditor';
import TextArea from '../common/TextArea';
import { RadioButtonGroup, RadioButton } from 'material-ui/RadioButton';
import { connect } from 'react-redux';
import TimePicker from 'material-ui/TimePicker';
import Checkbox from 'material-ui/Checkbox';

let Form = reduxForm.reduxForm({
    form: 'EmailServerEdit'
})(
(props: FormProps & EmailServerState & { startSendValue: 'now' | 'after_amount' | 'specific_time' }) => {
    const form = props.forms.filter(form => form.id)[0];

    console.log(props);

    return    <form 
        onSubmit={ props.handleSubmit(props.submit) }>
            <div>
                <Field
                    value={form.host}
                    name="host"
                    label="Host"
                    component={ Input } />
            </div>
            <div>
                <Field
                    value={form.port}
                    name="port"
                    label="Port"
                    component={ Input } />
            </div>
                <Checkbox
                    label="Simple"
                    />
            <div>
                <Field
                    value={form.login}
                    name="login"
                    label="Login"
                    component={ Input } />
            </div>
            <div>
                <Field
                    value={form.password}
                    name="password"
                    label="Password"
                    component={ Input } />
            </div>
            <Button type="submit">Submit</Button>
    </form>
}
);

const selector = reduxForm.formValueSelector('EmailServerEdit')

//http://redux-form.com/6.0.0-alpha.11/examples/selectingFormValues/
Form = connect(
  state => {
    const startSendValue = selector(state, 'startSend')
    return {
      startSendValue,
    }
  }
)(Form)

export default Form