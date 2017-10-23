Rails.application.routes.draw do
  
  root 'dashboard#index'
  
  namespace :api do
  	resources :acagroups, only: [:index, :create] do
  		get :search, on: :collection
  	end
  end
end
