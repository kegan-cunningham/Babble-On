import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {

  constructor (props) {
    super(props);
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
  </nav>
);

const ProfilePhotoLinks = ({ currentUser, logout, dropdownOpen, toggleDropdown, handleProfileLink }) => (
  <section className="header-photo-links">
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

export default withRouter(Header);
