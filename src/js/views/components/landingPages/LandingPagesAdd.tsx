import * as React from 'react';
import FormProps from '../common/FormProps';
import validate from '../../../validation/client/landingPages/LandingPagesFormClientValidator'
import warn from '../../../validation/client/landingPages/LandingPagesFormClientWarner'
import { connect } from 'react-redux';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import LandingPageState from '../../../model/state2/landingPage/LandingPageState';
import AutoComplete from '../common/AutoComplete';
import TextEditor from '../common/TextEditor';
import Select from '../common/Select';
import MenuItem from 'material-ui/MenuItem';
import LandingPagesAction from '../../../actions/LandingPagesAction'
import Input from '../common/Input';
import Button from '../common/Button';

let Form = reduxForm.reduxForm({
    form: 'LandingPagesAdd',
    validate,
    warn
})(
(props: FormProps & LandingPageState & { pageTypeValue: 'url' | 'manual' | 'page'} ) => {

    const form = props.forms.filter(form => form.id)[0];
    const isScrapedPage = props.pageTypeValue && props.pageTypeValue == 'page';

    return <form 
        onSubmit={ props.handleSubmit(props.submit) }>
          <div>
            <Field
                initValue={ form.pageType }
                name="pageType"
                label="Type"
                component={ Select }>
                    <MenuItem value={'manual'} primaryText="Manual" />
                    <MenuItem value={'page'} primaryText="Scraped Page" />
                    { form.isRedirectPage && <MenuItem value={'url'} primaryText="URL" /> }
            </Field>
            </div>
            
            { isScrapedPage
            &&
            <div>
                <Field
                    initValue={ form.scraperUserAgent }
                    name="scraperUserAgent"
                    label="Scraper User Agent"
                    data={ props.dependencies.scraperUserAgent }
                    component={ AutoComplete } /> 
            </div>
            }
            <div> 
                <Field
                    initValue={ form.name }
                    name="name"
                    label="Title"
                    component={ Input }  />
            </div>
            { isScrapedPage
            &&
            <div> 
                <Field
                    initValue={ form.url }
                    name="url"
                    label="URL"
                    component={ Input }  />
            </div>
            }
            { !isScrapedPage
            &&
            <div className="text-area">
                <Field
                    data={ form.source }
                    name="time"
                    label="Template"
                    component={ TextEditor } />
            </div>
            }
            <Button type="submit">Submit</Button>
    </form>
}
);

const selector = reduxForm.formValueSelector('LandingPagesAdd')

//http://redux-form.com/6.0.0-alpha.11/examples/selectingFormValues/
Form = connect(
  state => {
    const pageTypeValue = selector(state, 'pageType')
    return {
      pageTypeValue,
    }
  }
)(Form)

export default Form

