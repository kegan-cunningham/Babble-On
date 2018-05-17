Rails.application.routes.draw do

  get 'static_pages/root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :edit, :update, :show, :index]
    resources :servers, only: [:index, :show, :create] do
      resources :channels, only: [:index, :create]
    end
    resources :channels, only: [:show, :destroy]
    resource :session, only: [:create, :destroy]
  end

  mount ActionCable.server => '/cable'

  root 'static_pages#root'
end
