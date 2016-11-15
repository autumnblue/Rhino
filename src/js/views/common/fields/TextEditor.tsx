declare const CKEDITOR: any;

import * as React from 'react';
import Dialog from 'material-ui/Dialog';

class TextEditor extends React.Component<{ data: any, open: boolean }, {}> {
    public render() {
        return (
            <Dialog
                contentStyle={ 
                    { 
                        width: '95%',
                        maxWidth: 'none', 
                        height: '95%',
                        maxHeight: 'none' 
                    } 
                }
                open={ !!this.props.open }> 
                    <textarea id="editor1" name="editor1"></textarea>
            </Dialog>
        );
    }

    public componentDidMount() {
        if(this.props.open) this.replace();
    }

    public shouldComponentUpdate(nextProps) {
        return !nextProps.open;
    }

    public componentWillUpdate() {
        this.replace();
    }

    private replace() {
        CKEDITOR.replace( 'editor1' );

        if(this.props.data)
            CKEDITOR.instances.editor1.setData( this.props.data, function(){
                this.checkDirty();  // true
        });
    }
}

export default TextEditor;