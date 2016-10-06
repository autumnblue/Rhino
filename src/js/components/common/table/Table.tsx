import * as React from 'react';
import { ClientState } from '../../../model/state/ClientState';
import { connect } from 'react-redux';
import { Column, ColumnProps } from './Column';
import { ActionCol, ActionProps } from './ActionCol';
import { Dto } from '../../../model/dto/Dto';

class Component extends React.Component<{ data: Array<Dto> }, {}> {
    public render() {
        const columns = React.Children.map<ColumnProps>(this.props.children, child => {
            if(child['type'] == Column)
                return child['props'];                    
        });

        const actionCol = React.Children.map<ActionProps>(this.props.children, child => {
            if(child['type'] == ActionCol)
                return child['props'];
        })[0];

        const headers = columns.map(column => {
            return <th key={ column.headKey }>{ column.head }</th>
        });

        if(actionCol)
            headers.push( <th key="action">Action</th> )

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

            if(actionCol) {
                const attrib = actionCol;
                const removeIcon = attrib.remove 
                    && <a href="#">
                            <span className="glyphicon glyphicon-remove"></span>
                        </a>
                const editIcon = attrib.edit
                    && <a href="#" onClick={() => attrib.editCallback(datum.id)}>
                            <span className="glyphicon glyphicon-pencil"></span>
                        </a>
                row.push(
                    <td key = { `action${datum.id}` } >
                        { editIcon }
                        { removeIcon }
                    </td>
                )
            }
                
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
