import * as React from 'react';
import { connect } from 'react-redux';
import EmailServerRecord from '../../model/stateZ/emailServer/EmailServerRecord';
import Ref from '../../model/stateZ/Ref';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import EmailServerAction from '../../actions/EmailServerAction2'
import select from '../common/fields/Select';
import autoComplete from '../common/fields/AutoComplete';
import input from '../common/fields/Input';
import textArea from '../common/fields/TextArea';
import editor from '../common/fields/TextEditor';
import Submit from '../common/SubmitButton';
import MenuItem from 'material-ui/MenuItem';
import FormProps from '../common/FormProps';
import { AppState } from '../../model/state/AppState';
import ErrAlert from '../common/ErrorAlert';
import Toggle from 'material-ui/Toggle';
import Props from '../common/fields/CustomProps';
import FieldProps from '../common/fields/FieldProps';

const FORM = 'EmailServerForm'

let emailServerForm = reduxForm.reduxForm({
    form: FORM
})(
(props: FormProps 
    & { record: EmailServerRecord } ) => {         
        return <form 
            onSubmit={ props.handleSubmit(props.submit) }>
                <ErrAlert errorMsg={ props.error } />

                <div>
                    <Field
                        name="host"
                        label="Host"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="port"
                        label="Port"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="useTls"
                        label="Use TLS?"
                        component={ Toggle } />
                </div>              
                <div>
                    <Field
                        name="login"
                        label="Login"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="password"
                        label="Account Password"
                        component={ input } />
                </div>

                <Submit />
        </form>
});

export default connect(
    (state: AppState) => {    
        return {
            initialValues: state.emailServer.selectedRecord,
            record: state.emailServer.selectedRecord    
        }
    }
)(emailServerForm);

