import * as React from 'react';
import { connect } from 'react-redux';
import { MenuBar } from '../../components/menu/MenuBar';
import { Menu } from '../../components/menu/Menu';
import { Item } from '../../components/menu/Item';
import { AppState } from '../../../model/state/AppState';
import { MenuState } from '../../../model/state/MenuState';
import { NaviAction } from '../../../actions/navigation/NaviAction';
import { Dir } from '../../../common/Constants';
import IconButton from 'material-ui/IconButton';
import MailOutline from 'material-ui/svg-icons/communication/mail-outline';
import Settings from 'material-ui/svg-icons/action/settings';

class Container extends React.Component<Props, void> {
    public render() {
        if(this.props.state.handle) { 
            return (
                <MenuBar>
                    <Menu 
                        selected={ this.props.state.projects.selected }
                        onClick={ this.onProjectsClick }>
                            <span>Projects</span>
                            <Item href={ Dir.CLIENTS }>
                                    Clients
                            </Item>
                            <Item href={ Dir.CAMPAIGN }>
                                    Campaigns
                            </Item>
                            <Item href={ Dir.ENGAGEMENTS }>
                                    Engagements
                            </Item>
                            <Item href={ Dir.TARGET_LISTS }>
                                    Target Lists
                            </Item>
                            <Item href="/">
                                    Reports
                            </Item>
                    </Menu>

                    <Menu 
                        selected={ this.props.state.engagements.selected }
                        onClick={ this.onEngagementsClick }>
                            <span>Engagements</span>
                            <Item href={ Dir.ENGAGEMENTS }>
                                    Engagements
                            </Item>
                            <Item href="">
                                    Phishing Results
                            </Item>
                            <Item href={ Dir.O_AUTH_RESULTS }>
                                    OAuth Results
                            </Item>
                            <Item href={ Dir.PLUNDER }>
                                    OAuth Plunder
                            </Item>
                    </Menu>

                    <Menu 
                        selected={ this.props.state.logs.selected }
                        onClick={ this.onLogsClick }>
                            <span>Logs</span>
                            <Item href="">
                                    Email Log
                            </Item>
                            <Item href="">
                                    HTTP logs
                            </Item>
                    </Menu>

                    <Menu 
                        selected={ this.props.state.assets.selected }
                        onClick={ this.onAssetsClick }>
                            <span>Assets</span>
                            <Item href={ Dir.PHISHING_DOMAIN }>
                                    Domains
                            </Item>
                            <Item href={ Dir.LANDING_PAGES }>
                                    Landing Pages
                            </Item>
                            <Item href={ Dir.REDIRECT_PAGES }>
                                    Redirect Pages
                            </Item>
                            <Item href={ Dir.SCHEDULE }>
                                    Schedules
                            </Item>
                            <Item href={ Dir.EMAIL_SERVER }>
                                    Mail Servers
                            </Item>
                            <Item href={ Dir.EMAIL_TEMPLATES }>
                                    Email Templates
                            </Item>
                            <Item href={ Dir.O_AUTH_CONSUMERS }>
                                    OAuth Accounts
                            </Item>
                    </Menu>

                    <Menu 
                        selected={ this.props.state.tools.selected }
                        onClick={ this.onToolsClick }>
                            <span>Tools</span>
                            <Item href={ Dir.SHOAL_SCRAPE_TASKS }>
                                    Shoalscrape Results
                            </Item>
                            <Item href={ Dir.SHOAL_SCRAPE_CREDS }>
                                    Shoalscrape Crednetials
                            </Item>
                            <Item href={ Dir.SCRAPER_USER_AGENTS }>
                                    Scraper Useragents
                            </Item>
                    </Menu>

                    <Menu 
                        selected={ this.props.state.mail.selected }
                        href="/"
                        onClick={ this.onMailClick }>
                            <span className="glyphicon glyphicon-envelope"></span>
                    </Menu>

                    <Menu 
                        selected={ this.props.state.config.selected }
                        onClick={ this.onConfigClick }>
                            <span className="glyphicon glyphicon-cog"></span>
                            <Item href={ Dir.USERS }>
                                    Users
                            </Item>
                            <Item href="">
                                    Data Management
                            </Item> 
                    </Menu>

                    <Menu 
                        selected={ this.props.state.identity.selected }
                        onClick={ this.onIdentityClick }>
                            <span className="glyphicon glyphicon-user"></span>
                            <Item href="/profile">
                                    Profile
                            </Item>
                            <Item onClick={ this.onLogoutClick }>
                                    Logout
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

    private onProjectsClick = () => {
        NaviAction
            .clickProjects(this.props.dispatch);
    }

    private onEngagementsClick = () => {
        NaviAction
            .clickEngagements(this.props.dispatch);
    }

    private onLogsClick = () => {
        NaviAction
            .clickLogs(this.props.dispatch);
    }

    private onAssetsClick = () => {
        NaviAction
            .clickAssets(this.props.dispatch);
    }

    private onConfigClick = () => {
        NaviAction
            .clickConfig(this.props.dispatch);
    }

    private onLogoutClick = () => {
        NaviAction
            .logout(this.props.dispatch);
    }

    private onToolsClick = () => {
        NaviAction
            .clickTools(this.props.dispatch);
    }

    private onMailClick = () => {
        NaviAction
            .clickMail(this.props.dispatch);
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
