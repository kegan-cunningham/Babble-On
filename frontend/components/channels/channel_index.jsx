import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    };
  }

  componentDidMount() {
    this.props.fetchServer(this.props.match.params.serverId).then(
      () => {this.props.fetchChannels(this.props.match.params.serverId)}
    );
  }

  deleteChannel(channelId) {
    return () => this.props.deleteChannel(channelId)
      .then(() => this.props.getServer(this.props.currentServer.id))
      .then(() => this.props.history.push(`/${this.props.currentServer.id}/${this.props.channels[0].id}`));
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {

    let channelList;
    if (this.props.channels) {
      console.log(this.props)
      if (this.props.currentServer.id === this.props.currentUser.myServer) {
        channelList = this.props.channels.map(channel => {
          const name = channel.name.replace(this.props.currentUser.username, "");
          return (
            <NavLink
              key={channel.id}
              className="channel-button"
              to={`/${this.props.currentServer.id}/${channel.id}`}>
              <p className="channel-name"> { channel.name }</p>
            </NavLink>
          );
        });
      } else {
        let deleteChannel = null;
        channelList = this.props.channels.map(channel => {
          if (this.props.currentServer.owner_id === this.props.currentUser.id
            && this.props.channels.length > 1) {
              deleteChannel = (
                <button
                  className="remove-channel-button"
                  onClick={this.deleteChannel(channel.id)}>
                  <i className="fas fa-times"></i>
                </button>
              );
            }
            return (
              <NavLink
                key={channel.id}
                className="channel-button"
                to={`/${this.props.currentServer.id}/${channel.id}`}>
                <p className="channel-name"> { channel.name } { deleteChannel }</p>
                </NavLink>
            );
          });
      }
    }

    return (
      <div className="channel-index">
        <ul className="channel-list">
          {channelList}
        </ul>
        <div className="user-info">
          <img onClick={() => this.openModal()} src={this.props.currentUser.image_url}></img>
          <p>{this.props.currentUser.username}</p>
          <Link className='logout' to='/' onClick={this.props.logout}>Logout</Link>
        </div>
      </div>
    );
  }
}

export default ChannelIndex;
