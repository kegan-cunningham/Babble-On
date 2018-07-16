import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import AddServerContainer from './add_server_modal_container';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };

    this.deleteServer = this.deleteServer.bind(this);
  }

  componentDidMount() {
    this.props.fetchServers();
  }

  openModal() {
    this.setState({ isModalOpen: true });
    this.props.clearErrors();
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  addServerChannelName () {
    var headerServerChannel = document.getElementById('header-server-channel');
    headerServerChannel.style.display = 'block';
  }

  deleteServer(serverId) {
    return () => this.props.deleteServer(serverId)
      .then(() => this.props.fetchServers())
      .then(() => this.props.history.push(`/${this.props.servers[Object.keys(this.props.servers).sort()[0]].id}/${this.props.servers[Object.keys(this.props.servers).sort()[0]].channels[0].id}`))
      .then(() => this.setState(this.state))
  }

  render() {
    let serverList;
    let allServers;
    if (this.props.servers) {
      allServers = Object.values(this.props.servers).map(server => {
        let deleteServer = null;
        let colorStyle;
        let deleteColorStyle;
        if (server === null || this.props.currentServer === null){
        } else if (server.id === this.props.currentServer.id){
          colorStyle = { backgroundColor: '#2a473b'};
          if (server.owner_id === this.props.currentUser.currentUser.id) {
            deleteServer = (
              <button
                className="remove-server-button"
                onClick={this.deleteServer(server.id)}>
                x
              </button>
            );
          }
        }
        return (
          <div key={server.id} className='server-button'>
            <Link
              className='server-link'
              to={`/${server.id}/${server.channels[0].id}`}
              onClick={this.addServerChannelName}
            >
              <p className='server-name' style={colorStyle}>{server.name.length < 14 ? server.name : server.name.slice(0, 8) + '...'}</p>
            </Link>
            <p style={ deleteColorStyle } className="server-delete"> { deleteServer } </p>
          </div>
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
          <p className="server-name">+</p>
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
