class Api::ServersController < ApplicationController
  before_action :require_logged_in

  def index
    @servers = current_user.servers
    render 'api/servers/index'
  end

  def show
    @server = Server.find_by(id: params[:id])
    if @server
      render 'api/servers/show'
    else
      render json: ["We couldn't find that server."], status: 404
    end
  end

  def create
    if logged_in?
      @server = Server.new(server_params)
      @server.owner_id = current_user.id

      if @server.save!
        Subscription.create(server_id: @server.id, user_id: current_user.id)
        Channel.create(name: "General", server_id: @server.id)
        render 'api/servers/show'
      else
        render json: @server.errors.full_messages, status: 422
      end

    else
      render json: ["You need to log in to do that."], status: 400
    end
  end

  def destroy
    @server = Server.find_by(id: params[:id])
    if @server
      if current_user && @server.owner_id === current_user.id
        @server.delete
        render json: {}
      else
        render json: ["You aren't the owner of that server."], status: 404
      end
    else
      render json: ["We couldn't find that server."], status: 404
    end
  end

  private

  def server_params
    params.require(:server).permit(:name)
  end
end
