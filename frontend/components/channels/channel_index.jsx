import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import AddChannelContainer from './add_channel_modal_container';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };
  }

  componentDidMount() {
    this.props.fetchServer(this.props.match.params.serverId)
    .then(
      () => {document.getElementsByClassName('channel-index')[0].classList.add('width-transition')}
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.serverId !== nextProps.match.params.serverId) {
      this.props.fetchServer(nextProps.match.params.serverId)
    }
  }

  deleteChannel(channelId) {
    return () => this.props.deleteChannel(channelId)
      .then(() => this.props.fetchServer(this.props.currentServer.id))
      .then(() => this.props.history.push(`/${this.props.currentServer.id}/${this.props.channels[0].id}`));
  }

  openModal() {
    this.setState({ isModalOpen: true });
    this.props.clearErrors();
  }

  closeModal() {
    this.setState({ isModalOpen: false });
    this.props.fetchServer(this.props.match.params.serverId).then(
      () => {this.props.fetchChannels(this.props.match.params.serverId);}
    );
  }

  render() {
    let channelList;
    if (this.props.channels) {
      channelList = this.props.channels;
      function sortByKey(array, key) {
        return array.sort(function(a, b) {
          var x = a[key]; var y = b[key];
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
      }
      channelList = sortByKey(channelList, 'id');
      console.log(channelList)
      channelList = this.props.channels.map(channel => {
        let deleteChannel = null;
        let colorStyle;
        if (channel === null || this.props.currentChannel === null){
        } else if (channel.id === this.props.currentChannel.id){
          colorStyle = { backgroundColor: '#2a473b'};
        }
       if (this.props.currentServer.owner_id === this.props.currentUser.currentUser.id
          && this.props.channels.length > 1) {
            deleteChannel = (
              <button
                className="remove-channel-button"
                onClick={this.deleteChannel(channel.id)}>
                x
              </button>
            );
          }
          return (
            <NavLink
              key={channel.id}
              className="channel-button"
              to={`/${this.props.currentServer.id}/${channel.id}`}>
              <p style={ colorStyle } className="channel-name"> { channel.name.length < 14 ? channel.name : channel.name.slice(0, 13) + '...' } </p>
              <p style={ colorStyle } className="channel-delete"> { deleteChannel } </p>

              </NavLink>
          );
        });
      }

    return (
      <section className="channel-container">
        <div className="channel-index">
          <ul className="channel-list">
            {channelList}
          </ul>
          <Link
            onClick={() => this.openModal()}
            className="add-channel"
            to={this.props.location.pathname}>
            <p className="channel-name">+</p>
          </Link>
        </div>
        <AddChannelContainer
        isOpen={this.state.isModalOpen}
        onClose={() => this.closeModal()}
        />
      </section>
    );
  }
}

export default ChannelIndex;
