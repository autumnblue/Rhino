import * as React from 'react';
import { connect } from 'react-redux';

export interface ActionProps {
    edit?: boolean,
    delete?: boolean
} 

export class ActionCol extends React.Component<ActionProps, {}> {
    public render() {
        return <div>ACTION</div>
    }
}