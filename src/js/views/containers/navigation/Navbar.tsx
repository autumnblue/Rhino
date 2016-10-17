import * as React from 'react';
import { connect } from 'react-redux';
import { MenuBar } from '../../components/menu/MenuBar';
import { Menu } from '../../components/menu/Menu';
import { Item } from '../../components/menu/Item';
import { AppState } from '../../../model/state/AppState';
import { MenuState } from '../../../model/state/MenuState';
import { NaviAction } from '../../../actions/navigation/NaviAction';
import { Dir } from '../../../common/Constants';

class Container extends React.Component<Props, void> {
    public render() { 
        return (
            <MenuBar>
                <Menu 
                    selected={ this.props.state.identity.selected }
                    onClick={ this.onIdentityClick }>
                        <span>{`{ CURRENT_USER }`}</span>
                        <Item href="/profile">
                                Profile
                        </Item>
                        <Item href="/">
                                Logout
                        </Item> 
                </Menu>
                <Menu
                    selected={ this.props.state.config.selected } 
                    onClick={ this.onConfigClick }>
                        <span className="glyphicon glyphicon-cog"></span>
                        <Item 
                            href={ Dir.USERS }>
                                Users
                        </Item> 
                </Menu> 
            </MenuBar>
        );
    }

    private onIdentityClick = () => {
        NaviAction
            .clickIdentity(this.props.dispatch);
    }

    private onConfigClick = () => {
        NaviAction
            .clickConfig(this.props.dispatch);
    }
}

interface Props {
    dispatch?
    state?: MenuState
}

const mapStateToProps = (state: AppState): Props => {    
    return {
        state: state.navigation
    }
};

const mapDispatchToProps = (dispatch): Props => ({
    dispatch: dispatch
});

export const Navbar = connect(mapStateToProps, mapDispatchToProps)(Container);
