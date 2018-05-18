import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import AddServerContainer from './add_server_modal_container';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }

  componentDidMount() {
    this.props.fetchServers(this.props.match.params.id);
  }

  openModal() {
    this.props.clearErrors();
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
        let colorStyle;
        if (server === null || this.props.currentServer === null){
        } else if (server.id === this.props.currentServer.id){
          colorStyle = { backgroundColor: '#2a473b' };
        }
        return (
          <Link
            key={server.id}
            className='server-link'
            to={`/${server.id}/${server.channels[0].id}`}
          >
            <p className='server-name' style={colorStyle}>{server.name}</p>
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
