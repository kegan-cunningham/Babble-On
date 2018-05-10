import { connect } from 'react-redux';
import { fetchServers, fetchServer, createServer } from '../../actions/server_actions';
import { withRouter } from 'react-router-dom';
import ServerIndex from './server_index';

const mapStateToProps = (state, ownProps) => ({
  servers: state.servers.servers,
  currentServer: state.servers.currentServer,
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchServers: () => dispatch(fetchServers()),
  fetchServer: (serverId) => dispatch(fetchServer(serverId)),
  createServer: (server) => dispatch(createServer(server)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerIndex));
