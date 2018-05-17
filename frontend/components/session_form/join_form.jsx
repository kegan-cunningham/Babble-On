import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class JoinForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect(e) {
    e.preventDefault();
    this.props.history.push(`/`);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user;
    user = new FormData();
    user.append('user[username]', this.state.username);
    user.append('user[password]', this.state.password);
    user.append('user[firstname]', this.state.firstname);
    user.append('user[lastname]', this.state.lastname);
    this.props.formAction(user)
  }

  update(field) {
    return e => { this.setState({ [field]: e.currentTarget.value }); };
  }

  renderErrors() {
    return (
      <ul className="session-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  headerText() {
    return (
      <div className="header-title">
        <h2>Sign up for Babblio</h2>
      </div>
    );
  }

  navLink() {
    return (
      <div className="login-alternate">
        <p>Already have an account?</p>
        <button onClick={this.handleRedirect}>Log in</button>
      </div>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          { this.headerText() }
          { this.renderErrors() }
          <div className="login-form">

            <label className="username-password">
              <input type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input" />
              </label>

              <br/>
              <label className="username-password">
                <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input" />
              </label>
              <label className="firstname-lastname">
                <input type="text"
                placeholder="First Name"
                value={this.state.firstname}
                onChange={this.update('firstname')}
                className="login-input" />
              </label>
              <label className="firstname-lastname">
                <input type="text"
                placeholder="Last Name"
                value={this.state.lastname}
                onChange={this.update('lastname')}
                className="login-input" />
              </label>

              <br/>
              <input className="submit-button" type="submit" value="Submit" />
            { this.navLink() }
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(JoinForm);
