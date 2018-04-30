import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData;
    formData = Object.assign({}, {
      username: this.state.username,
      password: this.state.password,
    });
    this.props.formAction(formData)
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
        <h2>Log in to Babblio</h2>
      </div>
    );
  }

  navLink() {
    return (
      <div className="login-alternate">
        <p>Don't have an account?</p>
        <button onClick={this.handleRedirect}>Sign up</button>
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

              <br/>
              <input className="submit-button" type="submit" value="Submit" />
            { this.navLink() }
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
