import * as React from 'react';
import { connect } from 'react-redux';
import RedirectPageRecord from '../../model/stateZ/redirectPage/RedirectPageRecord';
import RedirectPageWidget from '../../model/stateZ/redirectPage/RedirectPageWidget';
import Ref from '../../model/stateZ/Ref';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import RedirectPageAction from '../../actions/RedirectPageAction2'
import select from '../common/fields/Select';
import autoComplete from '../common/fields/AutoComplete';
import input from '../common/fields/Input';
import editor from '../common/fields/TextEditor';
import Submit from '../common/SubmitButton';
import MenuItem from 'material-ui/MenuItem';
import FormProps from '../common/FormProps';
import { AppState } from '../../model/state/AppState';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ErrAlert from '../common/ErrorAlert';

const FORM = 'RedirectPageFormAdd'

let redirectPageForm = reduxForm.reduxForm({
    form: FORM
})(
(props: FormProps 
    & { widget: RedirectPageWidget }
    & { record: RedirectPageRecord } 
    & { pageTypeValue: 'url' | 'manual' | 'page'}) => { 
        const isScrapedPage = props.pageTypeValue && props.pageTypeValue == 'page';
        const isUrl = props.pageTypeValue && props.pageTypeValue == 'url';
        
        return <form 
            onSubmit={ props.handleSubmit(props.submit) }>
                <ErrAlert errorMsg={ props.error } />

                <div>
                    <Field
                        initValue={ props.record.pageType }
                        name="pageType"
                        label="Type"
                        component={ select }>
                            <MenuItem value={'manual'} primaryText="Manual" />
                            <MenuItem value={'page'} primaryText="Scraped Page" />
                            { props.record.isRedirectPage 
                                && <MenuItem value={'url'} primaryText="URL" /> }
                    </Field>
                </div>
                { isScrapedPage || isUrl
                    &&
                    <div>
                        <Field
                            name="scraperUserAgent"
                            label="Scraper User Agent"
                            data={ props.record.scraperUserAgent }
                            asyncSrc={ RedirectPageAction.getScraperUserAgentSuggestions }
                            component={ autoComplete } /> 
                    </div> 
                }
                <div> 
                    <Field
                        name="name"
                        label="Title"
                        component={ input }  />
                </div>
                { isScrapedPage || isUrl
                    &&
                    <div> 
                        <Field
                            name="url"
                            label="URL"
                            component={ input }  />
                    </div>
                }
                { !isScrapedPage || !isUrl
                    &&
                    <div className="text-area">
                        <IconButton onTouchTap={ () => RedirectPageAction.openEditor(props.dispatch) }>
                            <ModeEdit />
                        </IconButton>

                        <Field
                            open={ true }
                            data={ props.record.source }
                            name="template"
                            label="Template"
                            component={ editor } />
                    </div>
                }

                <Submit />
        </form>
});

const selector = reduxForm.formValueSelector(FORM)
//http://redux-form.com/6.0.0-alpha.11/examples/selectingFormValues/
export default connect(
  (state: AppState) => {
    const pageTypeValue = selector(state, 'pageType')
    return {
      pageTypeValue,
      initialValues: state.redirectPage.selectedRecord,
      record: state.redirectPage.selectedRecord,
      widget: state.redirectPage.widgetState
    }
  }
)(redirectPageForm)

