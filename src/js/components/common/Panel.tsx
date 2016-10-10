declare const $: any;

import * as React from 'react';

interface PanelProps {
    title: string
}

export class Panel extends React.Component<PanelProps, {}> {
    
    public render() {
        return (
            <div id="content">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h1>{this.props.title}</h1>
                    </div>
                    <div className="panel-body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}