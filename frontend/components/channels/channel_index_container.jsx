import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChannelIndex from './channel_index';
import { logout } from '../../actions/session_actions';
import { fetchServers, fetchServer, deleteServer } from '../../actions/server_actions';
import { fetchChannel, fetchChannels, createChannel, deleteChannel, clearErrors } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  currentServer: state.servers.currentServer,
  currentChannel: state.channels.currentChannel,
  channels: state.channels.channels,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchServers: () => dispatch(fetchServers()),
  fetchServer: (serverId) => dispatch(fetchServer(serverId)),
  deleteServer: (serverId) => dispatch(deleteServer(serverId)),
  fetchChannels: (serverId) => dispatch(fetchChannels(serverId)),
  fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
  createChannel: (serverId, channel) => dispatch(createChannel(serverId, channel)),
  deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
  clearErrors: () => dispatch(clearErrors()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelIndex));
