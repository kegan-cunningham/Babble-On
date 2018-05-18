class Api::ChannelsController < ApplicationController
  before_action :require_logged_in

  def index
    @channels = Server.find_by(id: params[:server_id]).channels
    render 'api/channels/index'
  end

  def show
    @channel = Channel.find_by(id: params[:id])
    if @channel
      render 'api/channels/show'
    else
      render json: ["We couldn't find that channel."], status: 404
    end
  end

  def create
    if logged_in?
      server = Server.find(params[:server_id])
      @channel = Channel.new(channel_params)
      @channel.server_id = params[:server_id]
      if @channel.save
        render 'api/channels/show'
      else
        render json: @channel.errors.full_messages, status: 422
      end
    else
      render json: ["You need to log in to do that."], status: 400
    end
  end

  def destroy
    @channel = Channel.find_by(id: params[:id])
    if @channel
      if current_user && @channel.server.owner_id === current_user.id
        @channel.delete
        render json: {}
      else
        render json: ["You aren't the owner of that channel."], status: 404
      end
    else
      render json: ["We couldn't find that channel."], status: 404
    end
  end

  private

  def channel_params
    params.require(:channel).permit(:name)
  end
end
