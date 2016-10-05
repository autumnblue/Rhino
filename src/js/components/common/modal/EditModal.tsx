import * as React from 'react';

export interface EditModalProps {
    title: string
}

export class EditModal extends React.Component<EditModalProps, {}> {
    
    public render() { 
        return (
            <div className="modal fade" id="edit-modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 className="modal-title" id="myModalLabel">{ this.props.title }</h4>
                        </div>
                        <div className="modal-body">
                        { this.props.children }
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}