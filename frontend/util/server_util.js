export const getServers = () => {
  return $.ajax({
    url: 'api/servers',
    method: "GET"
  });
};

export const getServer =  (serverId) => {
  return $.ajax({
    url: `api/servers/${serverId}`,
    method: "GET",
  });
};
