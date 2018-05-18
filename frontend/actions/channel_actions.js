import * as ChannelApiUtil from '../util/channel_util';

export const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";

const receiveChannels = (channels) => {
  return {
    type: RECEIVE_ALL_CHANNELS,
    channels
  };
};

const receiveChannel = (currentChannel) => {
  return {
    type: RECEIVE_CHANNEL,
    currentChannel
  };
};

const receiveChannelErrors = (errors) => {
  return {
    type: RECEIVE_CHANNEL_ERRORS,
    errors
  };
};

const removeChannel = (channelId) => {
  return {
    type: REMOVE_CHANNEL,
    channelId,
  };
};

export const clearErrors = () => dispatch => {
  return dispatch(receiveChannelErrors([]));
};

export const createChannel = (serverId, channel) => dispatch => {
  return ChannelApiUtil.createChannel(serverId, channel).then(
    channel => dispatch(receiveChannel(channel)),
    error => dispatch(receiveChannelErrors(error.responseJSON))
  );
};

export const deleteChannel = (channelId) => dispatch => {
  return ChannelApiUtil.deleteChannel(channelId).then(
    channel => dispatch(removeChannel(channelId)),
    error => dispatch(receiveChannelErrors(error.responseJSON))
  );
};

export const fetchChannels = (serverId) => dispatch => {
  return ChannelApiUtil.fetchChannels(serverId).then(
    channels => dispatch(receiveChannels(channels)),
    error => dispatch(receiveChannelErrors(error.responseJSON))
  );
};

export const fetchChannel = (channelId) => dispatch => {
  return ChannelApiUtil.fetchChannel(channelId).then(
    channel => dispatch(receiveChannel(channel)),
    error => dispatch(receiveChannelErrors(error.responseJSON))
  );
};
