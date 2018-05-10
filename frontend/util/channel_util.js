export const createChannel = (serverId, channel) => {
  return $.ajax({
    url: `api/servers/${serverId}/channels`,
    method: "POST",
    data: { channel }
  });
};

export const deleteChannel = (channelId) => {
  return $.ajax({
    url: `api/channels/${channelId}`,
    method: "DELETE",
  });
};

export const fetchChannels = (serverId) => {
    return $.ajax({
      url: `api/servers/${serverId}/channels`,
      method: "GET"
    });
};

export const fetchChannel =  (channelId) => {
  return $.ajax({
    url: `api/channels/${channelId}`,
    method: "GET",
  });
};
