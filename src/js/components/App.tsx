import * as React from 'react';
import { CampaignList } from './campaign/CampaignList';
import { UserList } from './user/UserList';
import { UserEdit } from './user/UserEdit';
import { Login } from './identity/Login';

export class App extends React.Component<void, void> {
    public render() {
        return (
            <div>
                <UserList />
                <UserEdit />
                <Login />
            </div>        
        );
    }
}    
