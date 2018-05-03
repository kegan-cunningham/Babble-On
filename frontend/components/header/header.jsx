import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {

  constructor (props) {
    super(props);

    this.handleProfileLink = this.handleProfileLink.bind(this);
  }

  handleProfileLink () {
    this.props.clearSessionErrors();
    const userId = this.props.currentUser.id;
    this.props.history.push(`/users/${userId}`);
  }

  render () {
    let headerLinksOrPhoto;
    if (this.props.currentUser) {
      headerLinksOrPhoto = (
        <div>
          <ProfilePhotoLinks
            handleProfileLink={this.handleProfileLink}
            dropdownOpen={this.props.dropdownOpen}
            toggleDropdown={this.props.toggleDropdown}
            currentUser={this.props.currentUser}
            logout={this.props.logout}
            key={this.props.currentUser}
          />
        </div>
      );
    } else {
      headerLinksOrPhoto = (
        <div>
          <SessionLinks
            key={1}
          />
        </div>
      );
    }

    return (
      <div>
      { headerLinksOrPhoto }
      </div>
    );
  }
}

const SessionLinks = (props) => (
  <nav className="header-session-links">
    <button>Join</button>
    <button>Log in</button>
  </nav>
);

const ProfilePhotoLinks = ({ currentUser, logout, dropdownOpen, toggleDropdown, handleProfileLink }) => (
  <section className="header-photo-links">
    <div onClick={toggleDropdown} className="dropdown-toggle">
      <i>&#9662;</i>
      <div className="header-photo">
        <img src={currentUser.imageUrl}></img>
      </div>
    </div>
    <ul className={dropdownOpen ? 'dropdown' : 'hidden'}>
      <button className="header-button" onClick={
          function(event){ toggleDropdown(); logout()}
        }>Log Out</button>
      <button className="header-button" onClick={
          function(event){ toggleDropdown(); handleProfileLink()}
        }>My Profile</button>
    </ul>
  </section>
);

export default withRouter(Header);
