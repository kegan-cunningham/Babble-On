import React, { Component } from 'react';
import { ProtectedRoute } from '../../util/route_util';
import { Route, Link } from 'react-router-dom';

class UserShow extends Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id).then(
      () => {
      }
    );
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchUser(nextProps.match.params.id);
    }
  }

  userInfo(user) {
    var interests = user.interests || ' none';
    return (
      <figure className='user-info'>
        <Link className='user-photo-link' to={`/users/${user.id}`}>
          <div className='user-show-img'>
              {/* <img src={user.imageUrl} alt={user.firstname} /> */}

          </div>
        </Link>
        <Link className='user-name-link' to={`/users/${user.id}`}>
          <h2 className='user-name'>{user.firstname} {user.lastname}</h2>
        </Link>
        <Link className='user-bio-link' to={`/users/${user.id}`}>
          <h2 className='user-bio'>Bio: {user.bio}</h2>
        </Link>
        <Link className='user-interests-link' to={`/stars/${user.star_id}`}>
          <h2 className='user-location'>Interests:
            {interests}
          </h2>
        </Link>
      </figure>
    );
  }

  render() {
    const { user } = this.props;
    if (!user) return null;

    return (
      <section className='user-show'>
        <section className='user-show-container'>
          <section className='user-card'>
          { this.userInfo(user) }
          </section>
        </section>
      </section>
    );
  }
}

export default UserShow;
