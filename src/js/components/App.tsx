import * as React from 'react';
import { CampaignList } from './campaign/CampaignList';
import { ClientList } from './client/ClientList';

export class App extends React.Component<void, void> {
    public render() {
        return (
            <div>
                <ClientList />
                <CampaignList />
            </div>        
        );
    }
}    
