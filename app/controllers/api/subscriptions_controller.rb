class SubscriptionsController < ApplicationController
  before_action :require_logged_in

  def create
    @server = Server.find_by(name: params[:name])
    if @server
      @subscription = Subscription.new(server_id: @server.id, user_id: current_user.id)
      if @subscription.save
        render 'api/servers/show'
      else
        render json: ["We couldn't subscribe you to that server"], status: 422
      end
    else
      render json: ["We couldn't find that server"], status: 404
    end
  end

  def destroy
    @subscription = Subscription.where(user_id: params[:user_id]).find_by(server_id: params[:server_id])
    if @subscription
      @subscription.destroy!
      @servers = current_user.servers
      render 'api/servers/index'
    else
      render json: ["We couldn't find that server"], status: 404
    end
  end

  private

  def subscription_params
    params.require(:subscription).permit(:server_id, :user_id)
  end
end
