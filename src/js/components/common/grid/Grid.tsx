import * as React from 'react';
import { ClientState } from '../../../model/state/ClientState';
import { connect } from 'react-redux';
import { Cell, CellProps } from './Cell';
import { Dto } from '../../../model/dto/Dto';

export class Grid extends React.Component<{ data: Array<Dto>, openCb(id: number): void }, {}> {
    public render() {

        const cells : Array<React.ReactElement<{}>> = this.props.data.map(datum => {
            return <Cell key={datum.id} text={`${datum['firstName']} ${datum['lastName']}`} cb={() => { this.props.openCb(datum.id) }} />
        });

        return (
            <div>
                { cells }
            </div>
        );
    }  
}
