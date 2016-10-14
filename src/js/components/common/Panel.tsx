import * as React from 'react';
import { Controls } from './Controls';

interface PanelProps {
    title: string
}

export class Panel extends React.Component<PanelProps, {}> {
    
    public render() {
        const controls = React.Children.map(this.props.children, child => {
            if(child['type'] == Controls)
                return <li> { child } </li>;
        });

        const children = React.Children.map(this.props.children, child => {
            if(child['type'] !== Controls)
                return child;
        });

        return (
            <div>
                <div id="content-body">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                                <div id="panel-title">
                                    <h3>{this.props.title}</h3>
                                </div>
                                <div id="panel-context">
                                    <ul className="list-inline">
                                        { controls }
                                    </ul>
                                </div>
                        </div>
                        <div className="panel-body">
                            { children }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}