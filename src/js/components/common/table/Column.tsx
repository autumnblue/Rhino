import * as React from 'react';
import { connect } from 'react-redux';
import { ColumnProps } from './ColumnProps';

class Component extends React.Component<ColumnProps, {}> {
    public render() {
        return null;
    }
}

export const Column = connect()(Component);