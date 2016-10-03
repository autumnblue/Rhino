import * as React from 'react';
import { connect } from 'react-redux';
import { IMessage } from '../../../common/message/IMessage'

export class InputMessageWrapper extends React.Component<InputMessageWrapperProps, {}> {
    public render() {
        const inputAttribs = React.Children.only(this.props.children).props;
             
        return (
            <input 
                className="form-control"
                {...inputAttribs} />
        );
    }
}

export interface InputMessageWrapperProps {
    msg: IMessage
    style?: React.CSSProperties
}