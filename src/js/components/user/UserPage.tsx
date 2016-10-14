import * as React from 'react';
import { UserList } from '../user/UserList';
import { UserEditModal } from '../user/UserEditModal';
import { Panel } from '../common/Panel';
import { Controls } from '../common/Controls';

export class UserPage extends React.Component<void, void> {
    public render() {
        return (
            <div>
                <Panel title="Users">
                    <Controls><span className="glyphicon glyphicon-plus"></span></Controls>
                    <Controls><span className="glyphicon glyphicon-th-list"></span></Controls>
                    <UserList />
                </Panel>
                <UserEditModal />
            </div>        
        );
    }
}    