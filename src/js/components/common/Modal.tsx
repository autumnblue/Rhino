declare const $: any;

import * as React from 'react';
import { Controls } from './Controls';

interface EditModalProps {
    title: string
    buttons?: React.Component<{}, {}>
    visible?: boolean
}

export class Modal extends React.Component<EditModalProps, {}> {
    
    public render() {
        let modal: React.ReactElement<EditModalProps> = null;
        if(this.props.visible) {
            const controls = React.Children.map(this.props.children, child => {
                if(child['type'] == Controls)
                    return <li>{ child }</li>;
            });

            const children = React.Children.map(this.props.children, child => {
                if(child['type'] !== Controls)
                    return child;
            });

            modal = (
                <div className="modal fade" id="modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title" id="myModalLabel">{ this.props.title }</h3>
                            </div>
                            <div className="modal-body">
                                { children }
                            </div>
                        </div>
                    </div>
                    <div id="context-bar2">
                        <ul className="nav nav-pills nav-stacked">
                            { controls }                            
                        </ul>
                    </div>
                </div>
            );
        }

        return modal;
    }

    public componentDidUpdate() {
        if(this.props.visible) {
            $('#modal').modal('show');
        }
    }
}