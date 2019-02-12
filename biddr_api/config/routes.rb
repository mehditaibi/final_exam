Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resource :session, only: [:create, :destroy]

  resources :users, only: [] do 
    get :current, on: :collection
  end

  resources :auctions, only: [:show, :create, :index] do
    resources :bids, only: [:create]
  end

end
