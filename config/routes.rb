Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :list_items, only: [:create, :destroy]
    resources :lists do 
      resources :menu_items, only: [:index]
    end
    resources :menu_items do
      collection { post :import }
    end
  end
end
