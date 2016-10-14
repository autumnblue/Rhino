import * as React from 'react';

export class Controls extends React.Component<void, void> {
    public render() {
        return ( 
            <div>{ this.props.children }</div>
        );
    }
}