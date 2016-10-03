import * as React from 'react';
import { connect } from 'react-redux';

export interface ActionProps {
    edit: boolean,
    delete: boolean
} 

class Component extends React.Component<ActionProps, {}> {
    public render() {
        return <div>ACTION</div>
    }
}

export const ActionCol = connect()(Component);