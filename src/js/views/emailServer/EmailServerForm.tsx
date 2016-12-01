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
import FlatButton from 'material-ui/FlatButton';

const renderToggle = (props: Props & FieldProps) => {
    return <Toggle 
        label={props.label}
        toggled={props.input.value ? true: false }
        labelPosition="right"
        onToggle={props.input.onChange}
    />
}

const FORM = 'EmailServerForm'

let emailServerForm = reduxForm.reduxForm({
    form: FORM
})(
(props: FormProps
    & { configurationValue: string }  
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
                        component={ renderToggle } />
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

                {/*
                <div>
                    <span>
                        <Field
                        name="configuration"
                        label="Test this configuration"
                        component={ input } />
                    </span>
                    <span>
                        <FlatButton 
                            onTouchTap={ 
                                () => props.dispatch(EmailServerAction
                                    .checkEmail(props.record, props.configurationValue))
                            }
                            label="Primary" 
                            primary={true} />
                    </span>
                </div> 
                */}

                <div>
                    <span>
                        <Field
                        name="testRecipient"
                        label="Test Recipient"
                        component={ input } />
                    </span>
                    <span>
                        <FlatButton 
                            onTouchTap={ 
                                () => props.dispatch(EmailServerAction
                                    .checkEmail(props.record, props.configurationValue))
                            }
                            label="Check Server" 
                            disabled={ props.record.testRecipient == null || props.record.testRecipient == undefined }
                            primary={true} />
                    </span>
                </div> 

                <div>
                    {
                        props.record.checkEmailMessage &&
                        props.record.checkEmailMessage.length == 0
                        ?
                        <span style={ { color: "green" } }>OK.</span>
                        :
                        <span style={ { color: "red" } }>{ props.record.checkEmailMessage }</span>
                        
                    }
                </div>

                <Submit />
        </form>
});

const selector = reduxForm.formValueSelector(FORM)

export default connect(
    (state: AppState) => {
        const configurationValue = selector(state, 'configuration')    
        return {
            configurationValue,
            initialValues: state.emailServer.selectedRecord,
            record: state.emailServer.selectedRecord    
        }
    }
)(emailServerForm);

