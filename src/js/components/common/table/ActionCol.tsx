import * as React from 'react';
import { connect } from 'react-redux';

export interface ActionProps {
    edit?: boolean,
    onEdit?(id: number): void,
    remove?: boolean
    onRemove?(id: number): void
} 

export class ActionCol extends React.Component<ActionProps, {}> {
    public render() {
        return <div>ACTION</div>
    }
}