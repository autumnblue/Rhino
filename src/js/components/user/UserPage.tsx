import * as React from 'react';
import { UserList } from '../user/UserList';
import { UserEditModal } from '../user/UserEditModal';
import { Panel } from '../common/Panel';

export class UserPage extends React.Component<void, void> {
    public render() {
        return (
            <div>
                <Panel title="Users">
                    <UserList />
                </Panel>
                <UserEditModal />
            </div>        
        );
    }
}    