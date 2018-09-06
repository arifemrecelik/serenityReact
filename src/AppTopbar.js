import React, { Component } from 'react';
import {InputText} from 'primereact/components/inputtext/InputText'
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class AppTopbar extends Component {

    static defaultProps = {
        activeTopbarItem: null,
        topbarMenuActive: null,
        onMenuButtonClick: null,
        onTopbarItemClick: null,
        onTopbarMobileMenuButtonClick: null,
        layoutMode: 'overlay',
    }

    static propTypes = {
        activeTopbarItem: PropTypes.string,
        topbarMenuActive: PropTypes.bool,
        onMenuButtonClick: PropTypes.func.isRequired,
        onTopbarItemClick: PropTypes.func.isRequired,
        onTopbarMobileMenuButtonClick: PropTypes.func.isRequired,
        layoutMode: PropTypes.string
    }

    constructor() {
        super();
        this.state = {};
    }

    onTopbarItemClick(event, item) {
        if(this.props.onTopbarItemClick) {
            this.props.onTopbarItemClick({
                originalEvent: event,
                item: item
            });
        }
    }

    render() {
        let topbarClass = classNames('topbar-menu fadeInDown',{'topbar-menu-active': this.props.topbarMenuActive})
        let horizontalIcon = (this.props.layoutMode === 'horizontal') &&
            <a className="topbar-logo">
                <img alt="logo" src="assets/layout/images/logo-slim.png" />
                <span className="app-name">SERENITY</span>
            </a>;

        return (
            <div className="layout-topbar">
                {horizontalIcon}
                <img alt="logo" src="assets/layout/images/logo-slim.png" className="mobile-logo"/>

                <a className="menu-btn" onClick={this.props.onMenuButtonClick}>
                    <i className="material-icons">&#xE5D2;</i>
                </a>

                <a className="topbar-menu-btn" onClick={this.props.onTopbarMobileMenuButtonClick}>
                    <i className="material-icons">&#xE853;</i>
                </a>

                <div className="layout-topbar-menu-wrapper">
                    <ul className={topbarClass}>
                        <li  className={classNames('profile-item', {'active-topmenuitem': this.props.activeTopbarItem === 'profile'})}>
                            <a onClick={(e) => this.onTopbarItemClick(e, 'profile')}>
                                <span className="profile-image-wrapper">
                                    <img src="assets/layout/images/avatar.png" alt="avatar"/>
                                </span>
                                <span className="topbar-item-name profile-name">Wendy Lorina</span>
                            </a>
                            <ul className="fadeInDown">
                                <li role="menuitem">
                                    <a>
                                        <i className="material-icons">account_circle</i>
                                        <span>Profile</span>
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a>
                                        <i className="material-icons">verified_user</i>
                                        <span>Privacy</span>
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a>
                                        <i className="material-icons">settings_application</i>
                                        <span>Settings</span>
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a>
                                        <i className="material-icons">exit_to_app</i>
                                        <span>Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className={classNames({'active-topmenuitem': this.props.activeTopbarItem === 'settings'})}>
                            <a onClick={(e) => this.onTopbarItemClick(e, 'settings')}>
                                <i className="topbar-icon material-icons">settings</i>
                                <span className="topbar-item-name">Settings</span>
                            </a>
                            <ul className="fadeInDown">
                                <li role="menuitem">
                                    <a>
                                        <i className="material-icons">palette</i>
                                        <span>Change Theme</span>
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a>
                                        <i className="material-icons">star</i>
                                        <span>Favorites</span>
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a>
                                        <i className="material-icons">lock</i>
                                        <span>Lock Screen</span>
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a>
                                        <i className="material-icons">wallpaper</i>
                                        <span>Wallpaper</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className={classNames({'active-topmenuitem': this.props.activeTopbarItem === 'messages'})}>
                            <a onClick={(e) => this.onTopbarItemClick(e, 'messages')}>
                                <i className="topbar-icon material-icons animated swing">&#xE0C9;</i>
                                <span className="topbar-badge animated rubberBand">5</span>
                                <span className="topbar-item-name">Messages</span>
                            </a>
                            <ul className="fadeInDown">
                                <li role="menuitem">
                                    <a className="topbar-message">
                                        <img src="assets/layout/images/avatar1.png" width="35"  alt="avatar1"/>
                                        <span>Give me a call</span>
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a className="topbar-message">
                                        <img src="assets/layout/images/avatar2.png" width="35"  alt="avatar2"/>
                                        <span>Sales reports attached</span>
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a className="topbar-message">
                                        <img src="assets/layout/images/avatar3.png" width="35" alt="avatar3"/>
                                        <span>About your invoice</span>
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a className="topbar-message">
                                        <img src="assets/layout/images/avatar2.png" width="35" alt="avatar2"/>
                                        <span>Meeting today at 10pm</span>
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a className="topbar-message">
                                        <img src="assets/layout/images/avatar4.png" width="35" alt="avatar4"/>
                                        <span>Out of office</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className={classNames({'active-topmenuitem': this.props.activeTopbarItem === 'notifications'})}>
                            <a onClick={(e) => this.onTopbarItemClick(e, 'notifications')}>
                                <i className="topbar-icon material-icons">notifications</i>
                                <span className="topbar-badge animated rubberBand">4</span>
                                <span className="topbar-item-name">Notifications</span>
                            </a>
                            <ul className="fadeInDown">
                                <li role="menuitem">
                                    <a>
                                        <i className="material-icons">bug_report</i>
                                        <span>Pending tasks</span>
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a>
                                        <i className="material-icons">event</i>
                                        <span>Meeting today at 3pm</span>
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a>
                                        <i className="material-icons">cloud_download</i>
                                        <span>Download documents</span>
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a>
                                        <i className="material-icons">flight</i>
                                        <span>Book flight</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className={classNames('search-item', {'active-topmenuitem': this.props.activeTopbarItem === 'search'})}
                            onClick={(e) => this.onTopbarItemClick(e, 'search')}>
                            <span className="md-inputfield">
                                <InputText type="text" />
                                <label>Search</label>
                                <i className="topbar-icon material-icons">search</i>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}