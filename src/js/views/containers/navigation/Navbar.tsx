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
        if(this.props.state.handle) { 
            return (
                <MenuBar>
                    <Menu 
                        selected={ this.props.state.identity.selected }
                        onClick={ this.onIdentityClick }>
                            <span>{ this.props.state.handle }</span>
                            <Item href="/profile">
                                    Profile
                            </Item>
                            <Item onClick={ this.onLogoutClick }>
                                    Logout
                            </Item> 
                    </Menu>

                    <Menu 
                        selected={ this.props.state.top.selected }
                        onClick={ this.onClick }>
                            <span className="glyphicon glyphicon-edit"></span>
                            <Item href={ Dir.ENGAGEMENTS }>
                                    Engagements
                            </Item>
                            <Item href={ Dir.CAMPAIGN }>
                                    Campaigns
                            </Item>
                            <Item href={ Dir.CLIENTS }>
                                    Clients
                            </Item>
                            <Item href={ Dir.PHISHING_DOMAIN}>
                                    <span className="glyphicon glyphicon-wrench"></span> Phishing Domains
                            </Item>
                    </Menu>

                    <Menu 
                        selected={ this.props.state.targets.selected }
                        href="/"
                        onClick={ this.onTargetsClick }>
                            <span className="glyphicon glyphicon-screenshot"></span>
                    </Menu>

                    <Menu 
                        selected={ this.props.state.pages.selected }
                        onClick={ this.onPagesClick }>
                            <span className="glyphicon glyphicon-list-alt"></span>
                            <Item href={ Dir.LANDING_PAGES }>
                                    Landing Pages
                            </Item>
                            <Item href={ Dir.REDIRECT_PAGES }>
                                    Redirect Pages
                            </Item>
                    </Menu>

                    <Menu 
                        selected={ this.props.state.email.selected }
                        onClick={ this.onEmailClick }>
                            <span className="glyphicon glyphicon-envelope"></span>
                            <Item href={ Dir.EMAIL_TEMPLATES }>
                                    Email Templates
                            </Item>
                            <Item href="/">
                                    Email Log
                            </Item>
                            <Item href={ Dir.SCHEDULE }>
                                    Schedules
                            </Item>
                            <Item href={ Dir.EMAIL_SERVER }>
                                    <span className="glyphicon glyphicon-wrench"></span> Email Servers
                            </Item>
                    </Menu>

                    <Menu 
                        selected={ this.props.state.scrape.selected }
                        onClick={ this.onScrapeClick }>
                            <span className="glyphicon glyphicon-upload"></span>
                            <Item href={ Dir.SHOAL_SCRAPE_TASKS }>
                                    ShoalScrape
                            </Item>
                            <Item href={ Dir.SCRAPER_USER_AGENTS }>
                                    <span className="glyphicon glyphicon-wrench"></span> Scraper User-Agents
                            </Item>
                            <Item href={ Dir.SHOAL_SCRAPE_CREDS }>
                                    <span className="glyphicon glyphicon-wrench"></span> ShoalScrape Credentials
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
        } else {
            return (
                <MenuBar>
                    <Menu 
                        selected={ this.props.state.identity.selected }
                        onClick={ this.onIdentityClick }>
                            <span>Skiff</span>
                            <Item href="/login">
                                    Login
                            </Item>
                    </Menu>
                </MenuBar>
            );
        }
    }

    private onIdentityClick = () => {
        NaviAction
            .clickIdentity(this.props.dispatch);
    }

    private onClick = () => {
        NaviAction
            .click(this.props.dispatch);
    }

    private onTargetsClick = () => {
        NaviAction
            .clickTarget(this.props.dispatch);
    }

    private onPagesClick = () => {
        NaviAction
            .clickPages(this.props.dispatch);
    }

    private onEmailClick = () => {
        NaviAction
            .clickEmail(this.props.dispatch);
    }

    private onScrapeClick = () => {
        NaviAction
            .clickScrape(this.props.dispatch);
    }

    private onConfigClick = () => {
        NaviAction
            .clickConfig(this.props.dispatch);
    }

    private onLogoutClick = () => {
        NaviAction
            .logout(this.props.dispatch);
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
