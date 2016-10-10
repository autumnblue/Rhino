import * as React from 'react';
import { Navbar } from './navigation/Navbar';

export class App extends React.Component<void, void> {
    public render() {
        return (
            <div>
                <Navbar />
                { this.props.children }
            </div>        
        );
    }
}    
