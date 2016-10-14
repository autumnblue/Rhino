import * as React from 'react';

export class Item extends React.Component<ItemProps, void> {
    public render() {
        return ( 
            <li>
                <a 
                    href={ this.props.href }
                    onClick={ this.props.onClick }>
                    <span 
                        className={ this.props.selected ? 'hilite' : ''}>
                            { this.props.children }
                    </span>
                </a>
            </li>
        )
    }
}

export interface ItemProps {
    // text: string
    selected?: boolean
    href?: string
    onClick?(): void
}