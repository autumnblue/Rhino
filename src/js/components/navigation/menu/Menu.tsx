import * as React from 'react';
import { Item, ItemProps } from './Item';

export class Menu extends React.Component<MenuProps, void> {
    public render() {
        const children = React.Children.map(this.props.children, child => {
            if(child['type'] !== Item)
                return child;
        });

        return ( 
            <li className={ this.props.selected ? 'hilite' : ''}>
                <a 
                    href={this.props.href || '#'}
                    onClick={ this.props.onClick }>
                        <span>
                            { children }
                        </span>
                </a>
            </li>
        )
    }
}

export interface MenuProps {
    // items: MenuItemProps
    selected?: boolean
    href?: string
    onClick?(): void
}