import * as React from 'react';
import { connect } from 'react-redux';
import { EmailTemplateList } from '../../components/emailTemplate/EmailTemplateList';
import { AppState } from '../../../model/state/AppState';
import { ListState } from '../../../model/state/page/ListState';
import EmailTemplateState from '../../../model/state2/emailTemplate/EmailTemplateState';
import { CrudContainer, Props } from '../crud/CrudContainer';
import EmailTemplateAction from '../../../actions/EmailTemplatesAction'
import EmailTemplateAddModal from './modals/EmailTemplateAddModal';
import EmailTemplateEditModal from './modals/EmailTemplateEditModal';

const EmailTemplatePageContainer = (props: Props2) => {
   return  <div>
        <CrudContainer
            title={ "EmailTemplates" }
            action={ EmailTemplateAction }
            {...props}>
                <EmailTemplateList 
                    view={props.state.view}
                    data={props.state || []}/>
        </CrudContainer>
        <EmailTemplateAddModal />
        <EmailTemplateEditModal />
    </div>
}

const mapStateToProps = (app: AppState): Props2 => ({
    state: app.emailTemplate
})

const EmailTemplatePage = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(EmailTemplatePageContainer);

interface Props2 {
    dispatch?
    state?: EmailTemplateState
    title?: string
    action?: any
    children?: any
}

export default EmailTemplatePage;     