import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    let logoutButton;
    if (this.props.currentUser) {
      logoutButton = (
        <div>
          <LogoutButton
            handleProfileLink={this.handleProfileLink}
            dropdownOpen={this.props.dropdownOpen}
            toggleDropdown={this.props.toggleDropdown}
            currentUser={this.props.currentUser}
            logout={this.props.logout}
            key={this.props.currentUser}
          />
        </div>
      );
    }

    let currentServerChannel;
    if (this.props.currentServer && this.props.currentChannel){
      currentServerChannel = (
        <div>
        <CurrentServerChannel
          currentServer={this.props.currentServer}
          currentChannel={this.props.currentChannel}
          key={this.props.currentServer}
        />
        </div>
      )
    }

    return (
      <div className="header-container">
        <div>
          { currentServerChannel }
        </div>
        <div>
          { logoutButton }
        </div>
      </div>
    );
  }
}

const LogoutButton = ({ currentUser, logout, dropdownOpen, toggleDropdown, handleProfileLink }) => (
  <section className="header-logout">
    {/*<div onClick={toggleDropdown} className="dropdown-toggle">
      <i>
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>
      </i>
      <div className="header-photo">
        <img src={currentUser.imageUrl}></img>
      </div>
    </div>
    <ul className={dropdownOpen ? 'dropdown' : 'hidden'}>*/}
    {/*}</ul>*/}
    <button className="logout-button" onClick={
        function(event){ toggleDropdown(); logout()}
      }>Log Out</button>
  </section>
);

const CurrentServerChannel = ({ currentServer, currentChannel }) => (
  <section className="header-server-channel">
    <h1>Server - Channel</h1>
  </section>
);

export default withRouter(Header);
