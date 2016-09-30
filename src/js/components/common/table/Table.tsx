import * as React from 'react';
import { ClientState } from '../../../model/state/ClientState';
import { connect } from 'react-redux';
import { ColumnProps } from './ColumnProps';
import { Column } from './Column';
import { Dto } from '../../../model/dto/Dto';

class Component extends React.Component<{ data: Array<Dto> }, {}> {
    public render() {
        const columns = React.Children.map<ColumnProps>(this.props.children, child => {
            if(child['type'] !== Column)
                console.log('Children in <Table /> must be of type <Column />');
            return child['props'];           
        });

        const headers = columns.map(column => {
            return <th key={ column.headKey }>{ column.head }</th>
        });

        const rows = this.props.data.map(datum => {
            const row = columns.map(column => {
                const value = datum[column.headKey]
                
                let a: React.ReactElement<{}>;                
                if(column.linkKey)
                    a = <a href={ datum[column.linkKey] }>{ value }</a>

                return(
                    <td key={ `${column.headKey}${datum.id}` }>{ a ? a : value }</td>
                )
            });

            return(
                <tr key={ datum.id }>
                    { row }        
                </tr>
            )
        })

        return (
            <table className="table">
                <thead>
                    <tr>{ headers }</tr>
                </thead>
                <tbody>
                    { rows }
                </tbody>
            </table>
        );
    }
}

export const Table = connect()(Component);    
