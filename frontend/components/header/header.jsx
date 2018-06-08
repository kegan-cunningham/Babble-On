import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {

  constructor (props) {
    super(props);
  }

  componentWillReceiveProps (nextProps) {
     this.setState({});
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
    if (this.props.currentServer && this.props.currentChannel && (this.props.location.pathname != "/")){
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
        <h1 className="header-logo"><Link onClick={this.removeServerChannelName} to={'/'}>Babblio</Link></h1>
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

function removeServerChannelName () {
  var headerServerChannel = document.getElementById('header-server-channel');
  console.log(headerServerChannel)
  headerServerChannel.style.display = 'none';
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
        function(event){ toggleDropdown(); logout(); removeServerChannelName()}
      }>Log Out</button>
  </section>
);

const CurrentServerChannel = ({ currentServer, currentChannel }) => (
  <section id="header-server-channel" className="header-server-channel">
    <h1>{currentServer.name} - {currentChannel.name}</h1>
  </section>
);

export default withRouter(Header);
