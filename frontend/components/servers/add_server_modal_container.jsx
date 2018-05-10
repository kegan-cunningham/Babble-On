import { connect } from 'react-redux';
import { createServer, fetchServers, fetchServer} from '../../actions/server_actions';
import { withRouter } from 'react-router-dom';
import AddServerModal from './add_server_modal';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.server
});

const mapDispatchToProps = dispatch => ({
  createServer: (formServer) => dispatch(createServer(formServer)),
  fetchServers: () => dispatch(fetchServers()),
  fetchServer: (serverId) => dispatch(fetchServer(serverId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AddServerModal));
