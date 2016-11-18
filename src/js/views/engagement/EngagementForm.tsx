import * as React from 'react';
import { connect } from 'react-redux';
import EngagementRecord from '../../model/stateZ/engagement/EngagementRecord';
import Ref from '../../model/stateZ/Ref';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import autoComplete from '../common/fields/AutoComplete'
import TextField from 'material-ui/TextField'
import EngagementAction from '../../actions/EngagementAction2'
import FetchAction from '../../actions/FetchAction'; 
import { AppState } from '../../model/state/AppState';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import ErrAlert from '../common/ErrorAlert';

// const renderAutoComplete = (props: Props & FieldProps) => {  
//     return <span>    
//         <AutoComplete
//             hintText={ props.label }
//             dataSource={ props.data && props.data.suggestions || [] }
//             dataSourceConfig={ { text: 'text', value: 'id'} }
//             filter={AutoComplete.fuzzyFilter}
//             floatingLabelText={ props.label }
//             maxSearchResults={ 10 } 
//             errorText={
//                 props.meta.touched && props.meta.error }
//             onNewRequest={
//                 (chosen: Ref) => {
//                     props.input.onChange(`${chosen.id}`)
//                 }
//             }
//             onUpdateInput={
//                 (searchText: string, dataSource: Ref[]) => {
//                     !dataSource.length
//                     && props.asyncSrc(props.meta.dispatch)
//                 }
//             }
//             searchText={props.input.value['text']}
//         />
//         <RefreshIndicator
//             size={25}
//             left={70}
//             top={0}
//             status={ props.data && props.data.loading ? 'loading' : 'hide'}/>
//     </span>  
// }

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
            <ErrAlert errorMsg={ props.error } />

            <div>
                <Field
                    name="campaign"
                    label="Campaign"
                    fetch={ FetchAction.getCampaignSuggestions }
                    component={ autoComplete } />
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
                    fetch={ FetchAction.getPhishingDomainSuggestions }
                    component={ autoComplete } />
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
                    fetch={ FetchAction.getScheduleSuggestions }
                    component={ autoComplete } />
            </div>
            <div>
                <Field
                    name="emailServer"
                    label="Send Using"
                    fetch={ FetchAction.getEmailServerSuggestions }
                    component={ autoComplete } />
            </div>
            <div>
                <Field
                    name="emailTemplate"
                    label="Email template"
                    fetch={ FetchAction.getEmailTemplateSuggestions }
                    component={ autoComplete } />
            </div>
            <div>
                <Field
                    name="landingPage"
                    label="Landing page"
                    fetch={ FetchAction.getLandingPageSuggestions }
                    component={ autoComplete } />
            </div>
            <div>
                <Field
                    name="redirectPage"
                    label="Redirect page"
                    fetch={ FetchAction.getRedirectPageSuggestions }
                    component={ autoComplete } />
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

