import * as React from 'react';
import { connect } from 'react-redux';
import EngagementRecord from '../../model/stateZ/engagement/EngagementRecord';
import Ref from '../../model/stateZ/Ref';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField'
import EngagementAction from '../../actions/EngagementAction2'
import { AppState } from '../../model/state/AppState';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const renderAutoComplete = (props: Props & FieldProps) => {  
    return <span>    
        <AutoComplete
            hintText={ props.label }
            dataSource={ props.data && props.data.suggestions || [] }
            dataSourceConfig={ { text: 'text', value: 'id'} }
            filter={AutoComplete.fuzzyFilter}
            floatingLabelText={ props.label }
            maxSearchResults={ 10 } 
            errorText={
                props.meta.touched && props.meta.error }
            onNewRequest={
                (chosen: Ref) => {
                    props.input.onChange(`${chosen.id}`)
                }
            }
            onUpdateInput={
                (searchText: string, dataSource: Ref[]) => {
                    !dataSource.length
                    && props.asyncSrc(props.meta.dispatch)
                }
            }
            searchText={props.input.value['text']}
        />
        <RefreshIndicator
            size={25}
            left={70}
            top={0}
            status={ props.data && props.data.loading ? 'loading' : 'hide'}/>
    </span>  
}

//searchText={ props.initTxt }

interface Props {
    data: Ref
    label: string
    asyncSrc: Function
    defaultValue: string
}

const renderInput = (props: Props & FieldProps) => {
    return <TextField
        hintText={ props.label }
        floatingLabelText={ props.label }
        errorText={
            props.meta.touched && props.meta.error
        }
        {...props.input}
    />
}

const renderTextArea = (props: Props & FieldProps) => {
    return <TextField
        hintText={ props.label }
        floatingLabelText={ props.label }
        errorText={
            props.meta.touched && props.meta.error
        }
        {...props.input}
        multiLine={true}
        rows={6}
    />
}

interface FieldProps {
  input: {
    name: string,
    value: string,
    onChange(value: string): void;
  },
  meta: {
    active: boolean,
    asyncValidating: boolean,
    autofilled: boolean,
    dirty: boolean,
    error: string,
    warning: string,
    invalid: boolean,
    pristine: boolean,
    submitting: boolean,
    touched: boolean,
    valid: boolean,
    visited: boolean,
    dispatch: Function
  },
  name: string
  children: any
}

const FORM = 'EngagementFormAdd'

const engagementForm = reduxForm.reduxForm({
    form: FORM
})(
(props: FormProps & {record: EngagementRecord }) => { 
    return <form 
        onSubmit={ props.handleSubmit(props.submit) }>
            <div>
                <Field
                    name="campaign"
                    label="Campaign"
                    data={props.record.campaign}
                    asyncSrc={ EngagementAction.getCampaignSuggestions }
                    component={ renderAutoComplete } />
            </div>
            <div>
                <Field
                    name="name"
                    label="Title"
                    component={ renderInput } />
            </div>
            <div>
                <Field
                    name="description"
                    label="Description"
                    component={ renderTextArea } />
            </div>
            <div>
                http://
                <Field
                    name="phishingDomain"
                    label="Phishing Domain"
                    data={props.record.phishingDomain}
                    asyncSrc={ EngagementAction.getPhishingDomainSuggestions }
                    component={ renderAutoComplete } />
                /
                <Field
                    name="path"
                    label="Path"
                    component={ renderInput } />
            </div>
            <div>
                <Field
                    name="schedule"
                    label="Schedule"
                    data={props.record.schedule}
                    asyncSrc={ EngagementAction.getScheduleSuggestions }
                    component={ renderAutoComplete } />
            </div>
            <div>
                <Field
                    name="emailServer"
                    label="Send Using"
                    data={props.record.emailServer}
                    asyncSrc={ EngagementAction.getEmailServerSuggestions }
                    component={ renderAutoComplete } />
            </div>
            <div>
                <Field
                    name="emailTemplate"
                    label="Email template"
                    data={props.record.emailTemplate}
                    asyncSrc={ EngagementAction.getEmailTemplateSuggestions }
                    component={ renderAutoComplete } />
            </div>
            <div>
                <Field
                    name="landingPage"
                    label="Landing page"
                    data={props.record.landingPage}
                    asyncSrc={ EngagementAction.getLandingPageSuggestions }
                    component={ renderAutoComplete } />
            </div>
            <div>
                <Field
                    name="redirectPage"
                    label="Redirect page"
                    data={props.record.redirectPage}
                    asyncSrc={ EngagementAction.getRedirectPageSuggestions }
                    component={ renderAutoComplete } />
            </div>

            <button type="submit" style={ { display: 'none' } } id="submit-form" />
    </form>
});

//const selector = reduxForm.formValueSelector(FORM);

export default connect(
    (state: AppState) => {    
        return {
            initialValues: state.engagement.selectedRecord,
            record: state.engagement.selectedRecord    
        }
    }
)(engagementForm);

interface FormProps {
    error: string;
    handleSubmit(fn: () => void): void
    submit(): void
}

