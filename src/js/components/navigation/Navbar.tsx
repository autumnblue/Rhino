//on successful login, Unauthenticated switches to users first_name + last_name
// ||| menu on farthest right, with button style user icon plus name next to it
// Skiff farthest left
// floats and scrolls

import * as React from 'react';
import { AppState } from '../../model/state/AppState';
import { LoginState } from '../../model/state/LoginState';
import { connect } from 'react-redux';
import { Table } from '../common/table/Table';
import { Column } from '../common/table/Column';
import { LoginAction } from '../../actions/LoginAction';
import { InputMessageWrapper } from '../common/message/InputMessageWrapper';

export class Navbar extends React.Component<{ username: string }, void> {
    public render() {
        return (
            <div id="ribbon" className="navbar-fixed-top">
                <span className="current-user btn-group">
                    <button 
                        type="button" 
                        className="btn btn-default dropdown-toggle" 
                        data-toggle="dropdown">
                            <span className="glyphicon glyphicon-user"></span>
                            &nbsp;
                            Michael Payne
                            &nbsp;
                            <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a href="#">
                                <span className="glyphicon glyphicon-sunglasses"></span>
                                &nbsp;
                                Profile
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li>
                            <a href="#">
                                <span className="glyphicon glyphicon-log-out"></span>
                                &nbsp;
                                Logout
                            </a>
                        </li>
                    </ul>
                </span>

                <span className="current-user">
                    <a 
                        className="dropdown-toggle" 
                        data-toggle="dropdown">
                            <img src="/assets/images/hamburger.png" />
                    </a>
                   <ul className="dropdown-menu pull-right">
                        <li>
                            <a href="#">
                                <span className="glyphicon glyphicon-list-alt"></span>
                                &nbsp;
                                Engagement Wizard
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="glyphicon glyphicon-heart"></span>
                                &nbsp;
                                Clients
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="glyphicon glyphicon-star-empty"></span>
                                &nbsp;
                                Campaigns
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="glyphicon glyphicon-screenshot"></span>
                                &nbsp;
                                Targets
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="glyphicon glyphicon-file"></span>
                                &nbsp;
                                Pages
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="glyphicon glyphicon-envelope"></span>
                                &nbsp;
                                Email
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li>
                            <a href="#">
                                <span className="glyphicon glyphicon-wrench"></span>
                                &nbsp;
                                Tools
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="glyphicon glyphicon-cog"></span>
                                &nbsp;
                                Configuration
                            </a>
                        </li>
                    </ul>
                </span>
            </div>        
        );
    }
}

                // <span className="badge">
                //     <span className="glyphicon glyphicon-user"></span> 
                //     <span id="handle">&nbsp;{ 
                //         `${this.props.username || 'Login'} | ` 
                //     }</span>
                // </span>
