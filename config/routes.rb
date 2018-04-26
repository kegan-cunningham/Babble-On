Rails.application.routes.draw do
  get 'static_pages/root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :edit, :update, :show, :index]
  end

  root 'static_pages#root'
end
