import { connect } from 'react-redux';
import { createChannel, fetchChannels, fetchChannel} from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';
import AddChannelModal from './add_channel_modal';

const mapStateToProps = (state, ownProps) => ({
  currentServer: state.servers.currentServer,
  errors: state.errors.channel
});

const mapDispatchToProps = dispatch => ({
  createChannel: (serverId, name) => dispatch(createChannel(serverId, name)),
  fetchChannels: () => dispatch(fetchChannels()),
  fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AddChannelModal));
