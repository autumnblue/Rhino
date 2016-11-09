declare const CKEDITOR: any;

import * as React from 'react';
//const ck = require('ckeditr');

class TextEditor extends React.Component<{}, {}> {
    public render() {
        return <textarea name="editor1"></textarea>
    }

    public componentDidMount() {
        CKEDITOR.replace( 'editor1' );
    }

    public shouldComponentUpdate() {
        return false;
    }
}

export default TextEditor;