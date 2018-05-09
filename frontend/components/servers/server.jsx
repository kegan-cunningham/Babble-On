import React, { Fragment } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import ServerIndexContainer from './server_index_container';

const Server = () => (
  <div className="main">
    <ServerIndexContainer />
  </div>
);

export default Server;
