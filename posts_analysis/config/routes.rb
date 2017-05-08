Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  resources :users

  root :to => 'dashboard#index'

  get 'dashboard/index', as: 'user_root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #
  post 'post_analysis/run'

  mount ActionCable.server => '/cable'
end
