Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :books
  resources :users
  get '/auth/:provider/callback', to: 'sessions#create'
  resources :reading_notes
  resources :discussions do
    resources :comments
  end
end
