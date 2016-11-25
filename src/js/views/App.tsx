import * as React from 'react';
import { Navbar } from './containers/navigation/Navbar';
import { ContextPane } from './containers/pane/ContextPane';
import LoginModal from '../views/identity/LoginModal';

import {
    Toolbar, 
    ToolbarGroup, 
    ToolbarSeparator,
    ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
 
export class App extends React.Component<void, void> {
    public render() {
        return (
            <div>
                <LoginModal />
                <Navbar />
                { /*<Toolbar
                    style={ { backgroundColor: 'rgba(28,28,38, .85)', paddingLeft: 10, paddingRight: 10, margin: 0 } }
                >
                    <ToolbarGroup>
                        <FlatButton 
                            label="Projects" />                             
                    </ToolbarGroup>
                </Toolbar>
                <Toolbar
                    style={ { backgroundColor: '#D74037', height: 40, paddingLeft: 10, paddingRight: 10, margin: 0 } }
                >
                    <ToolbarGroup>
                        <FlatButton 
                            label="Clients" />                             
                    </ToolbarGroup>
                </Toolbar>
                */}                  

                <div id="content">
                    { this.props.children }
                </div> 
                <div id="footer">&copy;2016 Rhino Security Labs. All Rights Reserved.</div>
            </div>        
        );
    }
}