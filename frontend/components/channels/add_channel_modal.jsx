import React from 'react';
import { Redirect } from 'react-router-dom';

class AddChannelModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      isModalOpen: false
    };
  }

  componentWillMount() {
    this.setState({
      name: "" ,
     });
  }

  closeModal(e) {
    e.preventDefault();
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  handleInput() {
    return (e) => {
      this.setState({ name: e.target.value });
    };
  }

  handleSubmit(type) {
    return (e) => {
    e.preventDefault();
    const serverId = this.props.currentServer.id;
    let channel;
    this.props.createChannel(serverId, this.state)
      .then(response => {channel = response.currentChannel; })
      .then(() => this.props.history.push(`/${serverId}/${channel.id}`))
      .then(() => this.props.onClose())
    };
  }

  render () {
    if (this.props.isOpen === false) {
      return null;
    }
    return (
      <div>
        <div className="channel-modal">
          <h1 className="modal-title">Create a Channel</h1>
          <div className="modal-sections">
            <form className="createChannel" onSubmit={this.handleSubmit("create")}>
              <h2 className="subtitle">CREATE</h2>
              <p className="subtext">Create a new channel. You can talk about anything!</p>
              <input
                className="text-input"
                autoFocus
                type="text"
                placeholder="channel name"
                value={this.state.name}
                onChange={this.handleInput("create")}
                >
              </input>
              <input className="submit" type="submit" value="Create a Channel"></input>
            </form>
          </div>
        </div>
        <div className="modal-screen" onClick={e => this.closeModal(e)}></div>
      </div>
    );
  }

}

export default AddChannelModal;
