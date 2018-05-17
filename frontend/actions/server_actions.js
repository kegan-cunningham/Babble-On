import * as ServerApiUtil from '../util/server_util';

export const RECEIVE_ALL_SERVERS = "RECEIVE_ALL_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";

export const receiveServers = (servers) => {
  return {
    type: RECEIVE_ALL_SERVERS,
    servers
  };
};

export const receiveServer = (currentServer) => {
  return {
    type: RECEIVE_SERVER,
    currentServer
  };
};

export const removeServer = (serverId) => {
  return {
    type: REMOVE_SERVER,
    serverId,
  };
};

export const receiveServerErrors = (errors) => {
  return {
    type: RECEIVE_SERVER_ERRORS,
    errors
  };
};

export const createServer = (server) => dispatch => {
  return ServerApiUtil.createServer(server).then(
    server => dispatch(receiveServer(server)),
    error => dispatch(receiveServerErrors(error.responseJSON))
  );
};

export const fetchServers = () => dispatch => {
  return ServerApiUtil.fetchServers().then(
    servers => dispatch(receiveServers(servers)),
    error => dispatch(receiveServerErrors(error.responseJSON))
  );
};

export const fetchServer = (serverId) => dispatch => {
  return ServerApiUtil.fetchServer(serverId).then(
    server => dispatch(receiveServer(server)),
    error => dispatch(receiveServerErrors(error.responseJSON))
  );
};

export const joinServer = (serverName) => dispatch => {
  return ServerApiUtil.joinServer(serverName).then(
    server => dispatch(receiveServer(server)),
    error => dispatch(receiveServerErrors(error.responseJSON))
  );
};

export const leaveServer = (subscriptionDetails) => dispatch => {
  return ServerApiUtil.leaveServer(subscriptionDetails).then(
    servers => dispatch(receiveServers(servers)),
    error => dispatch(receiveServerErrors(error.responseJSON))
  );
};
