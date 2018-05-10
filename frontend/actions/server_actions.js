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

export const createServer = (server) => dispatch => {
  return ServerApiUtil.createServer(server).then(
    server => dispatch(receiveServer(server)),
  );
};

export const fetchServers = () => dispatch => {
  return ServerApiUtil.fetchServers().then(
    servers => dispatch(receiveServers(servers)),
  );
};

export const fetchServer = (serverId) => dispatch => {
  return ServerApiUtil.fetchServer(serverId).then(
    server => dispatch(receiveServer(server)),
  );
};
