import * as React from 'react';
import { CampaignList } from './campaign/CampaignList';
import { UserList } from './user/UserList';
import { Login } from './identity/Login';

export class App extends React.Component<void, void> {
    public render() {
        return (
            <div>
                <UserList />
                <Login />
            </div>        
        );
    }
}    
