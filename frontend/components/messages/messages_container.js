import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Messages from './messages';
import { fetchServer } from '../../actions/server_actions';
import { fetchChannels, fetchChannel } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {
  let channels = [];
  if (state.channels.channels) {
    state.channels.channels.map(channel => {
      channels.push(channel.id);
    })
  }
  return {
    currentUser: state.session.currentUser,
    currentServer: state.servers.currentServer,
    currentChannel: state.channels.currentChannel,
    messages: state.messages.messages,
    channels
  };
};

const mapDispatchToProps = dispatch => ({
  fetchServer: (serverId) => dispatch(fetchServer(serverId)),
  fetchChannels: (serverId) => dispatch(fetchChannels(serverId)),
  fetchChannel: (channelId) => dispatch(fetchChannel(channelId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages));
