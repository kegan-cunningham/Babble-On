import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import AddServerContainer from './add_server_modal_container';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }

  componentDidMount() {
    this.props.fetchServers(this.props.match.params.id).then(
      () => {
      }
    );
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    let serverList;
    let allServers;
    if (this.props.servers) {
      allServers = Object.values(this.props.servers).map(server => {
        return (
          <Link
            key={server.id}
            className='server-link'
            to={`/${server.id}/${server.channels[0].id}`}
          >
            <p>{server.name}</p>
          </Link>
        );
      });
    } else {
      allServers = <p>No servers found</p>
    }

    return (
      <div className="servers">
        {allServers}
        <Link
          onClick={() => this.openModal()}
          className="add-server"
          to={this.props.location.pathname}>
          <p className="plus">+</p>
        </Link>
        <AddServerContainer
          isOpen={this.state.isModalOpen}
          onClose={() => this.closeModal()}
          />
      </div>
    );
  }

}

export default ServerIndex;
