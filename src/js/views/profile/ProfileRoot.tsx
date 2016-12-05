import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/stateZ/AppState';
import { CrudContainer, Props } from '../common/CrudContainer';
import ProfileAction from '../../actions/ProfileAction2'
import ProfileState from '../../model/stateZ/profile/ProfileState';
import ProfileAddModal from './modals/ProfileAddModal';
import ProfileList from './ProfileList';
import ProfileEditModal from './modals/ProfileEditModal';

const ProfileRoot = (props: Props) => {
    return <div>
        <CrudContainer
            title="Profiles"
            action={ ProfileAction }
            {...props}>
                <ProfileList
                    view={props.state.view}
                    data={props.state.records} />
        </CrudContainer>
        <ProfileAddModal />
        <ProfileEditModal />
    </div>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.profile
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ProfileRoot);  