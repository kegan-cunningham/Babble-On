import React, { Component } from 'react';
import { ProtectedRoute } from '../../util/route_util';
import { Route, Link } from 'react-router-dom';

class UserShow extends Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id).then(
      () => {
        this.props.clearReviewErrors();
        this.props.clearRequestErrors();
      }
    );
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchUser(nextProps.match.params.id);
      this.props.clearReviewErrors();
      this.props.clearRequestErrors();
    }
  }

  userPhotoName(user) {
    return (
      <figure className='user-photo-username'>
        <Link className='user-photo-link' to={`/users/${user.id}`}>
          <div className='user-show-img'>
              <img src={user.imageUrl} alt={user.name} />
          </div>
        </Link>
        <Link className='user-star-link' to={`/users/${user.id}`}>
          <h2 className='user-name'>{user.firstname} {user.lastname}</h2>
        </Link>
        <Link className='user-star-link' to={`/users/${user.id}`}>
          <h2 className='user-username'>{user.username}</h2>
        </Link>
        <h2 className='user-location'>Home star:
          <Link className='user-star-link' to={`/stars/${user.star_id}`}>
            {user.star}
          </Link>
        </h2>
      </figure>
    );
  }

  render() {
    const { user } = this.props;
    if (!user) return null;

    return (
      <section className='user-show'>
        <section className='user-show-container'>
          { this.userPhotoName(user) }
          <section className='user-card'>
            <ul className='user-bio-container'>
              <li className={'user-bio'}><h2>Bio:</h2> {user.bio}</li>
            </ul>
          </section>
        </section>
      </section>
    );
  }
}

export default UserShow;
