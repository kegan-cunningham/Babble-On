import React from 'react';
import { Redirect } from 'react-router-dom';

class AddServerModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      create: { name: "" },
      join: { name: "" }
     };
  }

  componentWillMount() {
    this.setState({
      create: { name: "" },
      join: { name: "" }
     });
  }

  closeModal(e) {
    e.preventDefault();
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  handleInput(type) {
    return (e) => {
      if (type === "create") {
        this.setState({ create: { name: e.target.value } });
      } else {
        this.setState({ join: { name: e.target.value } });
      }
    };
  }

  renderErrors() {
    console.log(this.props.errors)
    return (
      this.props.errors.map( (error, key) => {
        return <li className='errors' key={key} >{ error }</li>;
      })
    );
  }

  handleSubmit(type) {
    return (e) => {
      e.preventDefault();
      let server;
      if (type === "create") {
        this.props.createServer(this.state.create)
        .then(response => { server = response.currentServer; })
        .then(() => this.props.fetchServers())
        .then(() => this.props.history.push(`/${server.id}/${server.channels[0].id}`))
        .then(() => this.props.onClose());
      } else {
        this.props.joinServer(this.state.join)
        .then(response => { server = response.currentServer; })
        .then(() => this.props.fetchServers())
        .then(() => this.props.history.push(`/${server.id}/${server.channels[0].id}`))
        .then(() => this.props.onClose());
      }
    };
  }

  render () {
    if (this.props.isOpen === false) {
      return null;
    }
    return (
      <div>
        <div className="modal">
          <h1 className="modal-title">Create or Join a Server</h1>
          <div className="modal-sections">
            <form className="createServer" onSubmit={this.handleSubmit("create")}>
              <h2 className="subtitle">CREATE</h2>
              <p className="subtext">Create a new server and invite your friends. Its free!</p>
              <input
                className="text-input"
                autoFocus
                type="text"
                placeholder="server name"
                value={this.state.name}
                onChange={this.handleInput("create")}
                >
              </input>
              <input className="submit" type="submit" value="Create a Server"></input>
            </form>
            <ul className="server-errors">
             {this.renderErrors()}
           </ul>
            <form className="joinServer" onSubmit={this.handleSubmit("join")}>
              <h2 className="subtitle">JOIN</h2>
              <p className="subtext">Enter a Server Name and join your friend's server.</p>
              <input
                className="text-input"
                type="text"
                placeholder="enter a server name"
                value={this.state.name}
                onChange={this.handleInput("join")}
                >
              </input>
              <input className="submit" type="submit" value="Join a Server"></input>
            </form>
          </div>
        </div>
        <div className="modal-screen" onClick={e => this.closeModal(e)}></div>
      </div>
    );
  }

}

export default AddServerModal;
