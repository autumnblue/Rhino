import * as React from 'react';
import Dialog from 'material-ui/Dialog';

const loginModal = (props) => {
    return (
        <Dialog
            modal={ true }
            open={ this.props.open }
            contentClassName="dialog-content"
            bodyClassName="dialog-body"
            actionsContainerClassName="dialog-actions"
            autoScrollBodyContent={ true }>
                
        </Dialog>
    );
}

