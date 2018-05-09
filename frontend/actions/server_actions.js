import * as ServerApiUtil from '../util/server_util';

export const RECEIVE_ALL_SERVERS = "RECEIVE_ALL_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";

const receiveServers = (servers) => {
  return {
    type: RECEIVE_ALL_SERVERS,
    servers
  };
};

const receiveServer = (currentServer) => {
  return {
    type: RECEIVE_SERVER,
    currentServer
  };
};

export const getServers = () => dispatch => {
  return ServerApiUtil.getServers().then(
    servers => dispatch(receiveServers(servers)),
  );
};

export const getServer = (serverId) => dispatch => {
  return ServerApiUtil.getServer(serverId).then(
    server => dispatch(receiveServer(server)),
  );
};
