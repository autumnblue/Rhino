import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import { CrudContainer, Props } from '../common/CrudContainer';
import EmailTemplateAction from '../../actions/EmailTemplateAction2'
import EmailTemplateState from '../../model/stateZ/emailTemplate/EmailTemplateState';
import EmailTemplateAddModal from './modals/EmailTemplateAddModal';
import EmailTemplateList from './EmailTemplateList';
import EmailTemplateEditModal from './modals/EmailTemplateEditModal';

const EmailTemplateRoot = (props: Props) => {
    return <div>
        <CrudContainer
            title="EmailTemplates"
            action={ EmailTemplateAction }
            {...props}>
                <EmailTemplateList
                    view={props.state.view}
                    data={props.state.records} />
        </CrudContainer>
        <EmailTemplateAddModal />
        <EmailTemplateEditModal />
    </div>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.emailTemplate
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(EmailTemplateRoot);  