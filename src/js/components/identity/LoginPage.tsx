import * as React from 'react';
import { Login } from '../identity/Login';
import { Panel } from '../common/Panel';

export class LoginPage extends React.Component<void, void> {
    public render() {
        return (
            <div>
                <Panel title="Login">
                    <Login />
                </Panel>
            </div>        
        );
    }
}    