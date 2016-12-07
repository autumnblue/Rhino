import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import ProfileAction from '../../actions/ProfileAction'
import ProfileState from '../../model/state/profile/ProfileState';
import ProfileAddModal from './modals/ProfileAddModal';
import ProfileList from './ProfileList';
import ProfileEditModal from './modals/ProfileEditModal';
import RootView from '../common/RootView';
import { ToolbarGroup } from 'material-ui/Toolbar';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';

class ProfileRoot extends React.Component<Props, { addOpen: boolean, editOpen: boolean }> {
    public render() {
        const grids = this.props.state.records
        && this.props.state.records.map(record => {
            return (
                <GridTile
                    key={ record.id }
                    title={ record.user }
                    style={ { backgroundColor: 'rgba(51, 51, 61, .7)' } }
                    titlePosition="bottom">
                        <IconButton
                            onTouchTap={ () => { this.onEdit(record.id) } }>
                            <OpenInNew color="white" />
                        </IconButton>
                </GridTile>
            );
        })

        const table = <Table data={this.props.state.records}>
                <Column head="User" headKey="user" dependee />
                <ActionCol edit delete 
                    editCallback={this.onEdit }/>
            </Table>
        
        return <div>
            <ProfileEditModal />
            <ProfileAddModal />
            <RootView
                title="Profiles"
                onAdd={ this.onAdd }
                widgets={ null }
                onLoad={ this.onLoad }
                grids={grids}
                table={table} 
                records={this.props.state.records} />
        </div>
    }

    private onAdd = () => {
        ProfileAction.openAdd(this.props.dispatch);
    }

    private onEdit = (id) => {
        ProfileAction.openEdit(this.props.dispatch, id)
    }

    private onLoad = () => {
        ProfileAction.initPage(this.props.dispatch);
    }   
}

interface Props {
    dispatch?: Function
    state?: ProfileState;
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.profile
})

export default connect(
    mapStateToProps, 
    dispatch => ({
        dispatch
    })
)(ProfileRoot);

  