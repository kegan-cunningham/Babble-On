Rails.application.routes.draw do

  get 'static_pages/root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :edit, :update, :show, :index]
    resources :servers, only: [:index, :create]
    resource :session, only: [:create, :destroy]
  end


  root 'static_pages#root'
end
