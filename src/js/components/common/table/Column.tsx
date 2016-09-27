import * as React from 'react';
import { ClientState } from '../../../model/state/ClientState';
import { connect } from 'react-redux';
import { ColumnProps } from './ColumnProps';

class Component extends React.Component<ColumnProps, {}> {
    public render() {
        return null;
    }
}

export const Column = connect()(Component);