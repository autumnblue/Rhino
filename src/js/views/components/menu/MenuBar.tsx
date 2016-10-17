import * as React from 'react';
import { Menu, MenuProps } from './Menu';
import { Item, ItemProps } from './Item';

export class MenuBar extends React.Component<void, void> {
    public render() {
        const menuEls = React.Children.map<React.ReactElement<MenuProps>>(this.props.children, child => {
            if(child['type'] == Menu)
                return child as React.ReactElement<MenuProps>;
        });

        const selectedMenu = menuEls.filter(el => {
            return el.props.selected;            
        })[0];
               
        const itemEls = selectedMenu && React.Children.map<React.ReactElement<ItemProps>>(selectedMenu.props['children'], child => {
            if(child['type'] == Item)
                return child as React.ReactElement<ItemProps>;
        })

        return (
            <div className="navbar-fixed-top">
                <div id="ribbon">
                    <ul className="list-inline">
                        { menuEls }
                    </ul>
                </div>
                <div id="gutter">
                    <ul className="list-inline">
                        { itemEls }
                    </ul>
                </div>
            </div> 
        );
    }
}