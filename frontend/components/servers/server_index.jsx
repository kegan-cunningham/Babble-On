import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getServers(this.props.match.params.id).then(
      () => {
        console.log(this.props.servers);
      }
    );
  }

  render() {
    let serverList;
    let allServers;
    if (this.props.servers) {
      allServers = Object.values(this.props.servers).map(server => {
        return (
          <p>Server</p>
        );
      });
    } else {
      allServers = <p>No servers found</p>
    }

    return (
      <div className="servers">
        {allServers}
        <Link
          className="add-server"
          to={this.props.location.pathname}>
          <p className="add">Add</p>
        </Link>
      </div>
    );
  }

}

export default ServerIndex;
