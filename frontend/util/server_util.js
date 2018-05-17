export const fetchServers = () => {
  return $.ajax({
    url: 'api/servers',
    method: "GET"
  });
};

export const fetchServer =  (serverId) => {
  return $.ajax({
    url: `api/servers/${serverId}`,
    method: "GET",
  });
};

export const createServer = (server) => {
  return $.ajax({
    url: 'api/servers',
    method: "POST",
    data: { server }
  });
};

export const deleteServer = (serverId) => {
  return $.ajax({
    url: `api/servers/${serverId}`,
    method: "DELETE",
  });
};

export const joinServer = (serverName) => {
  return $.ajax({
    url: "api/subscriptions",
    method: "POST",
    data: serverName
  });
};

export const leaveServer = (subscriptionDetails) => {
  return $.ajax({
    url: "api/subscriptions/delete",
    method: "DELETE",
    data: subscriptionDetails
  });
};
