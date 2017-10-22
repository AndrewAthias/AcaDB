Rails.application.routes.draw do
  
  root 'dashboard#index'
  
  namespace :api do
  	resources :acagroups do
  		collection do
  			match 'search' => 'acagroups#search',via: [:get, :post], as: :search
  		end
  	end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  end
end
